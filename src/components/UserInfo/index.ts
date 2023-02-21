import { Dark } from 'quasar';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import UserActions from '../../components/EssentialLink.vue';

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
    link: '/chat_layout/settings/main',
  },
];
const currentUserAvatar = ref('avatar.jpg');
const darkModeStatus = ref(true);

export default defineComponent({
  name: 'UserInfo',
  components: { UserActions },
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
      // https://quasar.dev/style/dark-mode#What-it-does
      Dark.set(darkModeStatus.value);
      this.setDarkMode(darkModeStatus.value);
    },
  },

  created() {
    this.setUserTheme();
  },

  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    ...mapActions('appData', {
      setDarkMode: 'setDarkMode',
    }),
    setUserTheme() {
      const user = this.getCurrentUser();
      Dark.set(user.isDarkMode);
      this.setDarkMode(user.isDarkMode);
    },
    setCurrentuserAvatar() {
      const avatar = this.$store.state.appData.currentUser.avatar;
      return avatar;
    },
  },
});
