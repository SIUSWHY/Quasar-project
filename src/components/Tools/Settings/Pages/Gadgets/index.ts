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
    };
  },

  unmounted() {
    socket.off('send_user_token_to_socket');
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    goBack() {
      this.$router.push('/chat_layout/settings/main');
    },
    onDecode(decodedString: string) {
      this.isAddNewGadget = false;
      this.authUserByQR(decodedString);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paintOutline(detectedCodes: any, ctx: any) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },
  },
});
