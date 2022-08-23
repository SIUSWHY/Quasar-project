import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';
import UserActions from '../../components/EssentialLink.vue';

const actions = [
  {
    title: 'Contacts',
    icon: 'perm_contact_calendar',
    link: '/chat_layout/settings',
  },
  {
    title: 'Favorites',
    icon: 'bookmark',
    link: '/chat_layout/settings',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/chat_layout/settings',
  },
];

export default defineComponent({
  name: 'UserInfo',
  components: { UserActions },
  data() {
    const rightDrawerOpen = ref(false);
    return {
      userActions: actions,
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },

  mounted() {
    this.setCurrentUser();
  },

  methods: {
    ...mapActions('userList', { getCurrentUser: 'setCurrentUser' }),
    async setCurrentUser() {
      this.getCurrentUser();
    },
  },
});
