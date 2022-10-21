import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GroupChatInfo',
  props: {},
  data() {
    return {
      countOfMembers: this.$store.getters['appData/getCountMembersFromCurrentChat'],
      isNotify: ref(true),
      chat: this.$store.getters['appData/getCurrentChat'],
    };
  },
  methods: {},
});
