import { defineComponent, ref } from 'vue';
const { QrcodeStream } = require('vue3-qrcode-reader');

export default defineComponent({
  name: 'GadgetsPage',
  components: { QrcodeStream },
  data() {
    return {
      isAddNewGadget: ref(false),
    };
  },
  methods: {
    goBack() {
      this.$router.push('/chat_layout/settings/main');
    },
  },
});
