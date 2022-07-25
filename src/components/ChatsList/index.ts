import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatList',
  props: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },

    caption: {
      type: String,
      default: '',
    },

    time: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {},
});
