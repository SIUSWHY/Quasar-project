import { defineComponent, ref } from 'vue';
import UserInfo from '../components/UserInfo/index.vue';
import ChatComponentLayout from './Chat/index.vue';
import { mapActions, mapGetters } from 'vuex';
import { socket } from 'src/SocketInstance';
import MessageModal from '../components/Tools/WriteMessage/Modal/index.vue';
import { UserStatus } from './store/types';
import { useQuasar } from 'quasar';
import CallItem from './Calls/index.vue'

const toolsIsActive = ref(false);
const rightDrawerOpen = ref(false);
const width = window.innerWidth >= 1240 ? 500 : screen.width;
const $q = useQuasar();


export default defineComponent({
  name: 'MainLayout',

  components: {
    ChatComponentLayout,
    UserInfo,
    MessageModal,
    CallItem,
  },
  async created() {
    await this.prepareData();
    this.redireckToLayout();
    // socket.connect();

    socket.on('set_new_message_notify', data => {
      this.changeCountUnreadMessage(data);
    });

    this.getCallsLogs()
    // socket.emit('get_all_user_status');
  },
  mounted() {
    this.setUserDeviceInfo();
    // socket.on('send_all_users_status', (data: UserStatus[]) => {
    //   data.map(data => {
    //     this.changeUserStatus(data);
    //   });
    // });

    socket.on('send_online_status', (data: UserStatus) => {
      this.changeUserStatus(data);
    });

    socket.on('send_notify_to_companion', (data: { userId: string, peerId: string }) => {
      this.setCurrentUserForCall(data.userId)
      this.setPeerId(data.peerId)
      // this.triggerCallNotify(callingUser, data)
      if (this.$route.fullPath === '/chat_layout') {
        this.$router.push('chat_layout/calls/' + data.userId)
      }
    })
  },

  unmounted() {
    socket.off('send_all_users_status');
    socket.off('set_new_message_notify');
    socket.off('send_online_status');
    // socket.disconnect();
  },

  data() {
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
      triggerCallNotify(user: { avatar: string }, userId: string) {
        $q.notify({
          message: 'Incomming call...',
          color: 'dark',
          avatar: user.avatar,
          multiLine: true,
          timeout: 5000,
          actions: [
            { label: 'Cancel', color: 'negative', handler: () => { /* ... */ } },
            { label: 'Accept', color: 'positive', handler: () => { userId } }
          ]
        })
      },
    };
  },
  watch: {
    rightDrawerOpen() {
      this.redireckToLayout();
    },
  },
  methods: {
    ...mapActions('appData', {
      prepareData: 'prepareData',
      changeCountUnreadMessage: 'changeCountUnreadMessage',
      getChats: 'getChats',
      changeUserStatus: 'changeUserStatus',
      setUserDeviceInfo: 'setUserDeviceInfo',
      setCurrentUserForCall: 'setCurrentUserForCall',
      setPeerId: 'setPeerId',
      getCallsLogs: 'getCallsLogs'
    }),
    ...mapGetters('appData', {
      getChatsFromState: 'getChatsFromState',
      getCurrentUser: 'getCurrentUser',
      getUsers: 'getUsers'
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
      await this.getChats();
      done();
    },
    togleTools() {
      toolsIsActive.value = !toolsIsActive.value;
    },
    longClick() {
      console.log('click');

      // let mouseTimer: number;
      // function mouseDown() {
      //   mouseUp();
      //   mouseTimer = window.setTimeout(execMouseDown, 1000); //set timeout to fire in 2 seconds when the user presses mouse button down
      // }

      // function mouseUp() {
      //   if (mouseTimer) window.clearTimeout(mouseTimer); //cancel timer when mouse button is released
      //   div.style.backgroundColor = '#FFFFFF';
      // }

      // function execMouseDown() {
      //   div.style.backgroundColor = '#CFCF00';
      // }

      // const div = document.getElementById('bam');
      // div.addEventListener('mousedown', mouseDown);
      // document.body.addEventListener('mouseup', mouseUp); //listen for mouse up event on body, not just the element you originally clicked on
    },
  },
});
