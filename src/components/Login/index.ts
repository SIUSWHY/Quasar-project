import { Cookies, LocalStorage, useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import loginUser from '../../API/loginUser';
import { socket } from 'src/SocketInstance';
import vueQr from 'vue-qr/src/packages/vue-qr.vue';

const user = {
  name: 'Ares@gmail.com',
  password: 'Ares',
};

const isLoading = ref(false);
export default defineComponent({
  name: 'LoginPage',
  components: {
    vueQr,
  },
  data() {
    const $q = useQuasar();
    return {
      user,
      isLoading,
      accept: null,
      isPassword: ref(true),
      userDevice: ref(null),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      triggerNotify(err: any) {
        $q.notify({ type: err.type, message: err.message });
      },
      socket_id: ref(null),
    };
  },
  created() {
    this.setUserDeviceInfo();
    this.userDevice = this.getUserDevice();
    socket.connect();
    socket.emit('is_user_need_qr', {});

    socket.on('send_room_data_to_clent', data => {
      console.log(data.socketId);
      this.socket_id = data.socketId;
    });

    socket.on('send_user_token_to_socket', data => {
      Cookies.set('Token', data.token, { expires: 14 });
      LocalStorage.set('user_login_token', data.token);
      this.$router.push('/chat_layout');

      socket.emit('destroy_room_for_auth_qr', {
        roomId: data.roomId,
      });
    });

    const token: string | null = LocalStorage.getItem('user_login_token');
    if (token) {
      Cookies.set('Token', token, { expires: 14 });
      this.$router.push({ path: 'chat_layout' });
    }
  },
  unmounted() {
    socket.off('send_room_data_to_clent');
    socket.off('send_user_token_to_socket');
  },
  methods: {
    ...mapActions('appData', {
      setUserDeviceInfo: 'setUserDeviceInfo',
    }),
    ...mapGetters('appData', {
      getUserDevice: 'getUserDevice',
    }),
    ...mapMutations('appData', {
      setCurrentUser: 'SET_CURRENT_USER',
    }),

    async loginUser() {
      isLoading.value = true;
      try {
        const {
          data: { token },
        } = await loginUser(user);
        Cookies.set('Token', token, { expires: 14 });
        LocalStorage.set('user_login_token', token);

        socket.io.opts.query = {
          token: token,
        };
        socket.disconnect();
        socket.connect();

        isLoading.value = false;
        this.$router.push({ path: 'chat_layout' });
      } catch (err) {
        isLoading.value = false;
        this.triggerNotify(err);
      }
    },
  },
});
