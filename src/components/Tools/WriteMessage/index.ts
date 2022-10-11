import { defineComponent, ref } from 'vue';
import UserList from './UserList/index.vue';
import MessageModal from './Modal/index.vue';

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
  methods: {
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
