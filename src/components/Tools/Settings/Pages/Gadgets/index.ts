import { defineComponent, ref } from 'vue';
const { QrcodeStream } = require('vue3-qrcode-reader');

export default defineComponent({
  name: 'GadgetsPage',
  components: { QrcodeStream },
  data() {
    return {
      isAddNewGadget: ref(false),
      err: ref(),
      dencodeString: ref('')
    };
  },
  methods: {
    goBack() {
      this.$router.push('/chat_layout/settings/main');
    },
    onDecode(decodedString: string) {
      console.log(decodedString);
      this.dencodeString = decodedString
    },
    async logErrors(promise: Promise<any>) {
      promise.catch(console.error)
      this.err = await promise.catch(console.error)
    }
  },
});
