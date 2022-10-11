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
    ...mapGetters('userList', { getUsersDataForGroupChat: 'getUsersDataForGroupChat' }),
    ...mapActions('userList', { getChats: 'getChats' }),

    async createGroup() {
      const usersArr: UserType[] = this.getUsersDataForGroupChat();
      const usersIds: string[] = usersArr.map(user => {
        return user._id;
      });
      usersIds.push(this.$store.state.userList.currentUser._id);

      const groupData = {
        groupName: this.text,
        groupImage: this.$store.state.userList.currentUser.avatar,
        groupMembers: usersIds,
        groupType: ChatType.Group,
      };

      socket.emit('get_data_for_group', groupData);
      await this.getChats();
      this.$router.push('/chat_layout');
    },
  },
});
