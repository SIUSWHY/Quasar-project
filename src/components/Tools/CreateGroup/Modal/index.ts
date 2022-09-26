import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CreateGroupModal',
  props: {
    users: {
      type: Object,
    },
  },
  data() {
    return {
      file: ref(File),
      text: ref('Group'),
    };
  },
  methods: {
    createGroup() {
      const groupData = {
        groupName: this.text,
        groupImage: this.file,
        groupMembers: this.$props.users,
      };
      // groupData.groupMembers.
      console.log(groupData);
    },
  },
});
