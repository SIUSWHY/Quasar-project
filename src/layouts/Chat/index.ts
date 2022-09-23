import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatItemLayout',
  props: {
    _id: {
      type: String,
      required: true,
    },
    room_img: {
      type: String,
      required: true,
    },
    roomId: {
      type: String,
      required: true,
    },
    room_name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
});
