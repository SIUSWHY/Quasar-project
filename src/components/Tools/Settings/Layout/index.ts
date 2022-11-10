import { Cookies, LocalStorage } from 'quasar';
import { socket } from 'src/SocketInstance';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsLayout',
  components: {},
  data() {
    return {};
  },
  methods: {
    goTo() {
      this.$router.push('/chat_layout/settings/gadgets');
    },
    goTochatLayout() {
      this.$router.push('/chat_layout');
    },
    logout() {
      Cookies.remove('Token');
      LocalStorage.remove('user_login_token');
      socket.io.opts.query = {
        token: null,
      };
      socket.disconnect();
      socket.connect();
      this.$router.push('/');
    },
  },
});
