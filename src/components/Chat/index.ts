import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import MessageComponent from './Message/index.vue';

const messagesList = [
  { id: 1, name: 'me', massegeText: ['hey, how are you', 'test'] },
  {
    id: 2,
    name: 'Jane',
    massegeText: ['doing fine, how r you?'],
  },
];
const socket = io('https://pet-quasar-app.herokuapp.com/', {
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

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },
  setup() {
    return {
      socket,
      messageText,
      messages: messagesList,
    };
  },
  unmounted() {
    socket.disconnect();
  },
  mounted() {
    socket.connect();
  },
  methods: {
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
    postMessage() {
      if (messageText.value === null || undefined || '') {
        return;
        debugger;
      }
      socket.emit('message', {
        message: messageText.value,
      });
      console.log(messageText.value);
      messageText.value = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const test: any = this.$refs.textInput;
      test.focus();
    },
  },
});
