import { socket } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import MessageComponent from './Message/index.vue';
import GroupChatInfo from './GroupChatModal/index.vue';
import readMessagesFromChat from 'src/API/Message/readMssagesFromChat';
import detectURLs from 'src/helpers/parseUrlFromString';

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
      countOfMembers: this.$store.getters['appData/getCountMembersFromCurrentChat'],
      chat: this.$store.getters['appData/getCurrentChat'],
    };
  },

  unmounted() {
    this.clearChatData();
    this.clearCompanionStore();
    this.clearMessageStore();

    socket.off('sent_message_to_room');
    socket.off('send_room_data_to_clent');
    socket.off('send_url_result_to_client');
  },

  async created() {
    const companion = await this.getCompanion();
    const team = this.getCurrentTeam();
    socket.emit('get_companion_id', {
      companionId: companion._id,
      teamId: team._id,
    });

    socket.on('sent_message_to_room', data => {
      this.pushNewMessage(data.message);
    });

    socket.on('send_room_data_to_clent', async data => {
      const arrMessages = data.messages;
      await this.pushMessages(arrMessages);
      this.scrollIntoLastMessage();
      // this.handleScroll();
    });
    this.readAllUnreadMessages();
  },

  methods: {
    ...mapActions('chatData', {
      pushNewMessage: 'pushNewMessage',
      pushMessages: 'pushMessages',
      clearMessageStore: 'clearMessageStore',
      getCompanionData: 'getCompanionData',
      clearCompanionStore: 'clearCompanionStore',
    }),
    ...mapActions('appData', {
      clearChatData: 'clearChatData',
    }),
    ...mapGetters('appData', {
      getCurrentChat: 'getCurrentChat',
      getCurrentTeam: 'getCurrentTeam',
    }),
    ...mapGetters('chatData', {
      getCompanion: 'getCompanion',
    }),

    goChatLayout() {
      this.$router.push('/chat_layout');
    },
    goToCall() {
      this.$router.push('/chat_layout/calls/' + this.chat._id);
    },

    postMessage() {
      if (messageText.value === null || undefined || '') {
        return;
      }

      const currentTime = new Date();
      const postUserId = this.$store.state.appData.currentUser._id;

      const url = detectURLs(messageText.value);

      const message = {
        messageText: [messageText.value],
        stamp: currentTime,
        userId: postUserId,
        whoRead: [postUserId],
        url: url ? url.pop() : null,
      };

      socket.emit('save_message_to_db', {
        message: message,
      });

      // socket.emit('send_url_to_server', url?.pop());

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
      if (scroll) {
        scroll.scrollTop = scroll.scrollHeight;
      }
    },
    readAllUnreadMessages() {
      const chat = this.getCurrentChat();
      if (chat.unreadMessagesCount >= 1) {
        readMessagesFromChat(chat.roomId);
      }
    },
    // handleScroll() {
    //   const scroll = Array.from(document.querySelectorAll('.q-message-text--received'));

    //   if (scroll) {
    //     // Создаем новый observer (наблюдатель)

    //     const observer = new IntersectionObserver(function (entries) {
    //       entries.forEach(function (entry) {
    //         // Выводим в консоль сам элемент
    //         // console.log(entry.target);
    //         // Выводим в консоль true (если элемент виден) или false (если нет)
    //         // console.log(entry.isIntersecting);
    //       });
    //     });

    //     scroll.map(elem => {
    //       observer.observe(elem);
    //     });

    //     // Прикрепляем его к «наблюдателю»
    //   }
    // },
  },
});
