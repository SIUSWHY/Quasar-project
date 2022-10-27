import { Dark } from 'quasar';
import { defineComponent, ref } from 'vue';
import UserActions from '../../components/EssentialLink.vue';
import vueQr from 'vue-qr/src/packages/vue-qr.vue';

const actions = [
  // {
  //   title: 'Contacts',
  //   icon: 'perm_contact_calendar',
  //   link: '/chat_layout/settings',
  // },
  // {
  //   title: 'Favorites',
  //   icon: 'bookmark',
  //   link: '/chat_layout/settings',
  // },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/chat_layout/settings',
  },
];
const currentUserAvatar = ref('avatar.jpg');
const darkModeStatus = ref(true);

export default defineComponent({
  name: 'UserInfo',
  components: { UserActions, vueQr },
  data() {
    const rightDrawerOpen = ref(false);
    return {
      userActions: actions,
      currentUserAvatar,
      darkModeStatus,
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
  watch: {
    darkModeStatus() {
      if (darkModeStatus.value) {
        Dark.set(true);
      } else {
        Dark.set(false);
      }
    },
  },

  methods: {
    setCurrentuserAvatar() {
      const avatar = this.$store.state.appData.currentUser.avatar;
      return avatar;
    },
  },
});
