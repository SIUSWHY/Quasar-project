import { useSocketIO } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import MessageComponent from './Message/index.vue';

const messageText = ref(null);
const companionData = ref(null);
const socket = useSocketIO();

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },

  setup() {
    return {
      // socket: io('https://quasar-server.onrender.com/', {
      // socket: io('http://192.168.88.47:3000', {
      //   query: {
      //     token: Cookies.get('Token'),
      //     chatType: 'double',
      //   },
      // }),
      companionData,
      messageText,
    };
  },

  unmounted() {
    socket.socket.disconnect();
    this.clearCompanionStore();
    this.clearMessageStore();
  },

  async created() {
    const companionId = this.$route.path.split('/').pop();
    this.getCompanionData({ _id: companionId });
    socket.socket.emit('companionId', {
      companionId: companionId,
    });

    socket.socket.connect();

    socket.socket.on('ok', data => {
      this.pushNewMessage(data.data.message);
      console.log(data.data.message);
    });

    socket.socket.on('join', data => {
      const arrMessages = data.messages;
      this.pushMessages(arrMessages);
    });
  },

  methods: {
    ...mapActions('chatData', {
      pushNewMessage: 'pushNewMessage',
      pushMessages: 'pushMessages',
      clearMessageStore: 'clearMessageStore',
      getCompanionData: 'getCompanionData',
      clearCompanionStore: 'clearCompanionStore',
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

      socket.socket.emit('message', {
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
