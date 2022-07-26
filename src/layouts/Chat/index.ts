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
    chatType: {
      type: String,
    },
    isOnline: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('chatData', {
      setCompanionData: 'setCompanionData',
    }),
    ...mapActions('appData', {
      setCurrentChat: 'setCurrentChat',
    }),
    pushCompanionData() {
      const companion = { _id: this.$props._id, avatar: this.$props.room_img, name: this.$props.room_name };
      this.setCompanionData(companion);
      this.setCurrentChat(this.$props);
    },
    getRoomId() {
      socket.emit('get_room_id', {
        roomId: this.$props.roomId,
      });
    },
  },
});
