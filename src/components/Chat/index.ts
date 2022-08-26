import { Cookies } from 'quasar';
import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import MessageComponent from './Message/index.vue';

const messageText = ref(null);
const companionData = ref(null);

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },

  setup() {
    return {
      socket: io('http://192.168.88.47:3000', {
        query: {
          token: Cookies.get('Token'),
          chatType: 'double',
        },
      }),
      companionData,
      messageText,
    };
  },

  unmounted() {
    this.socket.disconnect();
  },

  async created() {
    companionData.value = this.getCompanion();
    const companionId = this.$route.path.split('/').pop();

    this.socket.emit('companionId', {
      companionId: companionId,
    });

    this.socket.connect();

    this.socket.on('ok', data => {
      this.pushNewMessage(data.data.message);
      console.log(data.data.message);
    });

    this.socket.on('join', data => {
      const arrMessages = data.messages;
      this.pushMessages(arrMessages);
    });
  },

  methods: {
    ...mapActions('chatData', {
      pushNewMessage: 'pushNewMessage',
      pushMessages: 'pushMessages',
    }),
    // ...mapActions('chatData', {
    //   pushMessages: 'pushMessages',
    // }),

    getCompanion() {
      const companionId = this.$route.path.split('/').pop();
      const companion = this.$store.getters['userList/getCompanionData'](companionId);
      return companion;
    },

    goChatLayout() {
      this.$router.push('/chat_layout');
    },

    postMessage() {
      if (messageText.value === null || undefined || '') {
        return;
      }

      const currentTime = new Date();
      const time = currentTime.getHours() + ':' + currentTime.getMinutes();
      const postUserId = this.$store.state.userList.currentUser._id;
      // const companionId = this.$route.path.split('/').pop();

      const message = {
        messageText: [messageText.value],
        stamp: time,
        userId: postUserId,
      };

      this.socket.emit('message', {
        message: message,
      });

      messageText.value = null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const textInput: any = this.$refs.textInput;
      textInput.focus();

      setTimeout(() => {
        const elementFromArrayElements = Array.from(document.querySelectorAll('.q-message-text')).pop();
        elementFromArrayElements?.scrollIntoView({ block: 'end', behavior: 'smooth' });
      });
    },
  },
});
