import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GroupChatInfo',
  props: {},
  data() {
    return {
      countOfMembers: this.$store.getters['userList/getCountMembersFromCurrentChat'],
      isNotify: ref(true),
      chat: this.$store.getters['userList/getCurrentChat'],
    };
  },
  methods: {},
});
