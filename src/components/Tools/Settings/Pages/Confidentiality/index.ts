import { Cookies, LocalStorage } from 'quasar';
import deleteAccount from 'src/API/Account/deleteAccount';
import { socket } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'ConfidentialityPage',
  components: {},
  data() {
    return {
      isModalOpen: ref(false),
      isLoading: ref(false),
    };
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    openModal() {
      this.isModalOpen = true;
    },
    goBack() {
      this.$router.push('/settings/main');
    },
    async deleteAccount() {
      this.isLoading = true;
      const user: { _id: string } = this.getCurrentUser();

      await deleteAccount({ _id: user._id });

      this.isLoading = false;

      Cookies.remove('Token');
      LocalStorage.remove('user_login_token');

      socket.emit('user_is_logout');
      socket.io.opts.query = {
        token: null,
      };
      socket.disconnect();
      socket.connect();

      this.$router.push('/');
    },
  },
});
