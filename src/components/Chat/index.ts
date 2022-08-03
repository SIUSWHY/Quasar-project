import { defineComponent } from 'vue';
import MessageComponent from './Message/index.vue';

const messagesList = [
  { name: 'me', text: 'hey, how are you' },
  {
    name: 'Jane',
    text: 'doing fine, how r you?',
  },
];

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
