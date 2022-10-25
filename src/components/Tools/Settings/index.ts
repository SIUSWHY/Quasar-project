import { defineComponent, ref } from 'vue';
import Modal from './Modal/index.vue';
import Gadgets from './Actions/Gadgets/index.vue';

export default defineComponent({
  name: 'SettingsPage',
  components: {
    Modal,
    Gadgets,
  },
  data() {
    return {
      isActionModalOpen: ref(false),
    };
  },
  methods: {},
});
