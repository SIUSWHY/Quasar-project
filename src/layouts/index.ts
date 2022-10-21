import { defineComponent, ref } from 'vue';
import UserInfo from '../components/UserInfo/index.vue';
import ChatComponentLayout from './Chat/index.vue';
import { mapActions, mapGetters } from 'vuex';
import { socket } from 'src/SocketInstance';
import MessageModal from '../components/Tools/WriteMessage/Modal/index.vue';
import { UserStatus } from './store/types';

const toolsIsActive = ref(false);
const rightDrawerOpen = ref(false);
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

export default defineComponent({
  name: 'MainLayout',

  components: {
    ChatComponentLayout,
    UserInfo,
    MessageModal,
  },
  async created() {
    await this.prepareData();
    this.redireckToLayout();
    socket.connect();

    socket.on('set_new_message_notify', data => {
      this.changeCountUnreadMessage(data);
    });
    socket.emit('get_all_user_status');
  },
  mounted() {
    socket.on('send_all_users_status', (data: UserStatus[]) => {
      data.map(data => {
        this.changeUserStatus(data);
      });
    });

    socket.on('send_online_status', (data: UserStatus) => {
      this.changeUserStatus(data);
    });
  },

  unmounted() {
    socket.off('send_all_users_status');
    socket.off('send_online_status');
    socket.disconnect();
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      toolsIsActive,
      leftDrawerOpen,
      width,
      rightDrawerOpen,
      tab: ref('chats'),
      isMessageModalOpen: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
  watch: {
    rightDrawerOpen() {
      this.redireckToLayout();
    },
  },
  methods: {
    ...mapActions('userList', {
      prepareData: 'prepareData',
      changeCountUnreadMessage: 'changeCountUnreadMessage',
      getChats: 'getChats',
      changeUserStatus: 'changeUserStatus',
    }),
    ...mapGetters('userList', {
      getChatsFromState: 'getChatsFromState',
      getCurrentUser: 'getCurrentUser',
    }),

    redireckToLayout() {
      if (rightDrawerOpen.value === false) {
        this.$router.push({ path: '/chat_layout' });
      }
    },
    writeMessage() {
      this.toggleRightDrawer();
      // this.$router.push({ path: 'chat_layout/write_message' });
    },

    async refreshUserList(done: () => void) {
      setTimeout(() => {
        this.getChats();
        done();
      }, 1000);
    },
    togleTools() {
      toolsIsActive.value = !toolsIsActive.value;
    },
  },
});
