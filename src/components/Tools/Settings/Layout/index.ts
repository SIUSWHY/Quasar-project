import { Cookies, LocalStorage } from 'quasar';
import changeUserAvatar from 'src/API/Account/changeUserAvatar';
import { socket } from 'src/SocketInstance';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'SettingsLayout',
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    ...mapActions('appData', {
      patchUserAvatar: 'patchUserAvatar',
    }),
    changeUserAvatar() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/png, image/jpeg, image/gif';
      input.onchange = async () => {
        if (input.files !== null) {
          const userId = this.getCurrentUser()._id;
          const response = new FormData();
          response.append('id', userId);
          response.append('avatar', input.files[0]);
          const { data: user } = await changeUserAvatar(response);
          this.patchUserAvatar(user);
        }
      };
      input.click();
    },
    goTo(path: string) {
      this.$router.push('/settings/' + path);
    },
    goTochatLayout() {
      this.$router.push('/chat_layout');
    },
    logout() {
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
