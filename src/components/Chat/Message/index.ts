import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageComponent',
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {};
  },
});
