import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

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
    unreadMessagesCount: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('chatData', {
      setCompanionData: 'setCompanionData',
    }),
    pushCompanionData() {
      this.setCompanionData({ _id: this.$props._id, avatar: this.$props.room_img, name: this.$props.room_name });
    },
  },
});
