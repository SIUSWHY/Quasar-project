import { Cookies } from 'quasar';
import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
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
      // socket: io('https://quasar-server.onrender.com/', {
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
    this.clearCompanionStore();
    this.clearMessageStore();
  },

  async created() {
    const companionId = this.$route.path.split('/').pop();
    this.getCompanionData({ _id: companionId });
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
    this.getLenght();
  },

  methods: {
    ...mapActions('chatData', {
      pushNewMessage: 'pushNewMessage',
      pushMessages: 'pushMessages',
      clearMessageStore: 'clearMessageStore',
      getCompanionData: 'getCompanionData',
      clearCompanionStore: 'clearCompanionStore',
    }),
    getLenght() {
      const lenght = this.getMessages();
      console.log(lenght.lenght);
    },
    ...mapGetters('chatData', {
      getMessages: 'getMessages',
    }),

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
        elementFromArrayElements?.scrollIntoView({ behavior: 'smooth' });
        console.log(elementFromArrayElements);
      }, 300);
    },
  },
});
