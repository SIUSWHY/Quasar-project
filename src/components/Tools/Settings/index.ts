import { defineComponent, ref } from 'vue';
import QrCodeModal from './QrCodeModel/index.vue';

export default defineComponent({
  name: 'SettingsPage',
  components: {
    QrCodeModal,
  },
  data() {
    return {
      isQrCodeModalOpen: ref(false),
    };
  },
  methods: {},
});
