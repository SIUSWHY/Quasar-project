import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import UserComponent from './UserComponent/index.vue';
import CreateGroupModal from './Modal/index.vue';
interface UserData {
  name: string;
  _id: string;
  avatar: string;
}

export default defineComponent({
  name: 'CreateGroup',
  components: {
    UserComponent,
    CreateGroupModal,
  },
  data() {
    return {
      isCreateGroupModalOpen: ref(false),
    };
  },
  unmounted() {
    this.clearSelectedUsers();
  },

  methods: {
    ...mapActions('userList', { pushSecelectedUsers: 'pushSecelectedUsers', clearSelectedUsers: 'clearSelectedUsers' }),
    ...mapGetters('userList', { getUsersDataForGroupChat: 'getUsersDataForGroupChat' }),

    clickToChouseChat(chip: UserData) {
      this.pushSecelectedUsers(chip);
    },
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
    createGroupChat() {
      this.isCreateGroupModalOpen = true;
      const usersIds: string[] = [];
      const usersData: Array<UserData> = this.getUsersDataForGroupChat();

      for (let i = 0; i < usersData.length; i++) {
        usersIds.push(usersData[i]._id);
      }
    },
  },
});
