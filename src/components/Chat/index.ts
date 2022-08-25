import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import MessageComponent from './Message/index.vue';

const socket = io('http://192.168.88.47:3000', {
  query: {
    // idRoom
  },
});

socket.emit('connection', { user: 'Ares' });

setTimeout(() => {
  socket.emit('message', {
    test: true,
  });
}, 2000);

const messageText = ref(null);
const companionData = ref(null);
const messagesArray = ref(null);
const room_id = Date.now();

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
    const currentUser = this.$store.state.userList.currentUser;
    socket.emit('roomId', { room_id: room_id, username: currentUser.name });
    socket.connect();

    socket.on('ok', data => {
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

      const message = {
        messageText: [messageText.value],
        stamp: time,
        name: postUserId,
      };

      socket.emit('message', {
        message: message,
        room_id: room_id,
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
