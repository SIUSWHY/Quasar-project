import { socket } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import MessageComponent from './Message/index.vue';
import GroupChatInfo from './GroupChatModal/index.vue';

const messageText = ref(null);
const companionData = ref(null);

export default defineComponent({
  name: 'ChatPage',
  components: {
    MessageComponent,
    GroupChatInfo,
  },

  data() {
    return {
      isGroupInfoOpen: ref(false),
      companionData,
      messageText,
      countOfMembers: this.$store.getters['userList/getCountMembersFromCurrentChat'],
      chat: this.$store.getters['userList/getCurrentChat'],
    };
  },

  unmounted() {
    this.clearChatData();
    this.clearCompanionStore();
    this.clearMessageStore();

    socket.off('sent_message_to_room');
    socket.off('send_room_data_to_clent');
  },

  async created() {
    const companion = await this.getCompanion();
    socket.emit('get_companion_id', {
      companionId: companion._id,
    });

    socket.on('sent_message_to_room', data => {
      this.pushNewMessage(data.data.message);
    });

    socket.on('send_room_data_to_clent', async data => {
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
    ...mapActions('userList', {
      clearChatData: 'clearChatData',
    }),
    ...mapGetters('chatData', {
      getCompanion: 'getCompanion',
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

      socket.emit('save_message_to_db', {
        message: message,
      });

      messageText.value = null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const textInput: any = this.$refs.textInput;
      textInput.focus();

      setTimeout(() => {
        const elementFromArrayElements = Array.from(document.querySelectorAll('.q-message-text')).pop();
        elementFromArrayElements?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    },
    scrollIntoLastMessage() {
      const scroll = document.getElementById('scrollPoint');
      if (scroll) scroll.scrollTop = scroll.scrollHeight;
    },
    handleScroll() {
      const scroll = Array.from(document.querySelectorAll('.q-message-text--received'));

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
