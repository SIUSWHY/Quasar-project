import { socket } from 'src/SocketInstance';
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
      companionData,
      messageText,
    };
  },

  unmounted() {
    this.clearCompanionStore();
    this.clearMessageStore();

    socket.off('ok');
    socket.off('join');
  },

  async created() {
    const companion = await this.getCompanion();
    // this.getCompanionData({ _id: companion._id });
    socket.emit('companionId', {
      companionId: companion._id,
    });

    socket.on('ok', data => {
      this.pushNewMessage(data.data.message);
      console.log(data.data.message);
    });

    socket.on('join', async data => {
      this.setNewChat(data.room);
      const arrMessages = data.messages;
      await this.pushMessages(arrMessages);
      this.scrollIntoLastMessage();
      this.handleScroll();
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
    ...mapGetters('chatData', {
      getCompanion: 'getCompanion',
    }),
    ...mapActions('userList', {
      setNewChat: 'setNewChat',
    }),

    goChatLayout() {
      this.$router.push('/chat_layout');
    },

    postMessage() {
      if (messageText.value === null || undefined || '') {
        return;
      }

      const currentTime = new Date();
      const postUserId = this.$store.state.userList.currentUser._id;

      const message = {
        messageText: [messageText.value],
        stamp: currentTime,
        userId: postUserId,
        whoRead: [postUserId],
      };

      socket.emit('message', {
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
    scrollIntoLastMessage() {
      const scroll = document.getElementById('scrollPoint');
      if (scroll) scroll.scrollTop = scroll.scrollHeight;
    },
    handleScroll() {
      const scroll = Array.from(document.querySelectorAll('.q-message-text--received'));
      console.log('elem', scroll);

      if (scroll) {
        // Создаем новый observer (наблюдатель)

        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            // Выводим в консоль сам элемент
            console.log(entry.target);
            // Выводим в консоль true (если элемент виден) или false (если нет)
            console.log(entry.isIntersecting);
          });
        });

        scroll.map(elem => {
          observer.observe(elem);
        });

        // Прикрепляем его к «наблюдателю»
      }
    },
  },
});
