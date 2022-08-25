import { Cookies } from 'quasar';
import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import MessageComponent from './Message/index.vue';

const messageText = ref(null);
const companionData = ref(null);
const messagesArray = ref(null);

const socket = io('http://192.168.88.47:3000', {
  query: {
    token: Cookies.get('Token'),
    chatType: 'double',
  },
});

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },

  setup() {
    return {
      socket,
      companionData,
      messagesArray,
      messageText,
    };
  },

  unmounted() {
    socket.disconnect();
  },

  async created() {
    messagesArray.value = this.$store.getters['chatData/getMessages'];
    companionData.value = this.getCompanion();
    const companionId = this.$route.path.split('/').pop();

    socket.emit('companionId', {
      companionId: companionId,
    });

    socket.connect();

    socket.on('ok', data => {
      console.log(socket);

      this.pushNewMessage(data.data.message);
    });
  },

  methods: {
    ...mapActions('chatData', {
      pushNewMessage: 'pushNewMessage',
    }),

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

      socket.emit('message', {
        // users_id: [postUserId, companionId],
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
