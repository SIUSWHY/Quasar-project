import { io } from 'socket.io-client';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import MessageComponent from './Message/index.vue';

const socket = io('http://localhost:3000', {
  query: {
    // idRoom
  },
});

socket.on('ok', data => {
  console.log(data);
  // console.log(socket.id);
  // console.log(socket.connected);
  // set state
});

setTimeout(() => {
  socket.emit('message', {
    test: true,
  });
}, 2000);

const messageText = ref(null);
const companionData = ref(null);
const messagesArray = ref(null);

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

  created() {
    messagesArray.value = this.$store.getters['chatData/getMessages'];
    companionData.value = this.getCompanion();
    socket.connect();
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
      socket.emit('message', {
        message: messageText.value,
      });
      const currentTime = new Date();
      const time = currentTime.getHours() + ':' + currentTime.getMinutes();

      const message = {
        messageText: [messageText.value],
        stamp: time,
        name: 'me',
      };

      messageText.value = null;

      this.pushNewMessage(message);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const textInput: any = this.$refs.textInput;
      textInput.focus();
    },
  },
});
