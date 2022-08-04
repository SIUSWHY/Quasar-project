// import { io } from 'socket.io-client';
import { defineComponent } from 'vue';
import MessageComponent from './Message/index.vue';

const messagesList = [
  { id: 1, name: 'me', massegeText: ['hey, how are you', 'test'] },
  {
    id: 2,
    name: 'Jane',
    massegeText: ['doing fine, how r you?'],
  },
];
// const socket = io('http://localhost:8080/#/chat_layout/chat');

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
  },
  setup() {
    return {
      messages: messagesList,
    };
  },
  methods: {},
});
