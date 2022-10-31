import { socket } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';
const { QrcodeStream } = require('vue3-qrcode-reader');

export default defineComponent({
  name: 'GadgetsPage',
  components: { QrcodeStream },
  data() {
    return {
      isAddNewGadget: ref(false),
      err: ref(),
      dencodeString: ref(''),
    };
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    goBack() {
      this.$router.push('/chat_layout/settings/main');
    },
    onDecode(decodedString: string) {
      console.log(decodedString);
      this.dencodeString = decodedString;
      this.isAddNewGadget = false;
      this.authUserByQR(decodedString);
    },
    async logErrors(promise: Promise<any>) {
      promise.catch(console.error);
      this.err = await promise.catch(console.error);
    },
    authUserByQR(decodedString: string) {
      const user = this.getCurrentUser();

      socket.emit('send_data_for_auth_user_by_qr', {
        socketId: decodedString,
        userData: user,
      });
    },
  },
});
