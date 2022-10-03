import { socket } from 'src/SocketInstance';
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
      const companion = { _id: this.$props._id, avatar: this.$props.room_img, name: this.$props.room_name };
      this.setCompanionData(companion);
    },
    getRoomId() {
      socket.emit('getRoomId', {
        roomId: this.$props.roomId,
      });
      console.log(this.$props.roomId);
    },
  },
});
