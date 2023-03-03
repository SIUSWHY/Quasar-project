import { defineComponent, ref } from 'vue';
import UserList from './UserList/index.vue';
import MessageModal from './Modal/index.vue';
import { socket } from 'src/SocketInstance';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'WriteMessage',
  components: {
    UserList,
    MessageModal,
  },
  data() {
    return {
      isMessageModalOpen: ref(false),
    };
  },
  async created() {
    socket.on('room_created', async () => {
      await this.getChats();
      this.$router.push('/chat_layout');
    });
  },
  unmounted() {
    socket.off('room_created');
  },
  methods: {
    ...mapActions('appData', { getChats: 'getChats' }),
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
    createChat(user: { _id: string }) {
      socket.emit('create_double_room', {
        companionId: user._id,
        teamId: this.$store.state.appData.currentTeam._id,
      });
    },
  },
});
