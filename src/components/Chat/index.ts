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
const socket = io('http://localhost:3000', {
  query: {
    // idRoom
  },
});

socket.on('ok', data => {
  console.log(data);
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
  methods: {
    postMessage() {
      if (messageText.value === (null || undefined || '')) {
        return;
      }
      socket.emit('message', {
        message: messageText.value,
      });
      // console.log(messageText.value);
    },
  },
});
