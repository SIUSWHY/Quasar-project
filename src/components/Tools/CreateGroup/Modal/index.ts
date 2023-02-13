import { ChatType } from 'src/components/Chat/store/types';
import { UserType } from 'src/layouts/store/types';
import { socket } from 'src/SocketInstance';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'CreateGroupModal',
  props: {
    users: {
      type: Object,
    },
  },
  data() {
    return {
      // file: ref(File),
      text: ref('Group'),
    };
  },
  methods: {
    ...mapGetters('appData', {
      getUsersDataForGroupChat: 'getUsersDataForGroupChat',
      getCurrentUser: 'getCurrentUser',
    }),
    ...mapActions('appData', { getChats: 'getChats' }),

    async createGroup() {
      const usersArr: UserType[] = this.getUsersDataForGroupChat();
      const usersIds: string[] = usersArr.map(user => {
        return user._id;
      });
      usersIds.push(this.getCurrentUser()._id);

      const groupData = {
        groupName: this.text,
        groupImage: this.$store.state.appData.currentUser.avatar,
        groupMembers: usersIds,
        groupType: ChatType.Group,
        adminUserId: this.getCurrentUser()._id,
      };

      socket.emit('get_data_for_group', groupData);
      await this.getChats();
      this.$router.push('/chat_layout');
    },
  },
});
