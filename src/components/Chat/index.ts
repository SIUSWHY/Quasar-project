import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import MessageComponent from './Message/index.vue';

const socket = io('https://pet-quasar-app.herokuapp.com', {
  query: {
    // idRoom
  },
});

socket.on('ok', data => {
  console.log(data);
  console.log(socket.id);
  console.log(socket.connected);

  // set state
});

setTimeout(() => {
  socket.emit('message', {
    test: true,
  });
}, 2000);

const messageText = ref(null);
const companionData = ref(null);

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },
  setup() {
    return {
      socket,
      companionData,
      messageText,
    };
  },
  unmounted() {
    socket.disconnect();
  },
  created() {
    companionData.value = this.getCompanion();
    socket.connect();
  },
  methods: {
    getCompanion() {
      const companionId = this.$route.path.split('/').pop();
      const companion = this.$store.getters['userList/getCompanionData'](companionId);
      console.log(companion);
      return companion;
    },
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
    postMessage() {
      if (messageText.value === null || undefined || '') {
        return;
      }
      socket.emit('message', {
        message: messageText.value,
      });
      console.log(messageText.value);
      messageText.value = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const textInput: any = this.$refs.textInput;
      textInput.focus();
    },
  },
});
