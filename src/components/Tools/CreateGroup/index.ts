import { defineComponent } from 'vue';
import UserList from './UserList/index.vue';

export default defineComponent({
  name: 'CreateGroup',
  components: {
    UserList,
  },
  data() {
    return {
      //   toggleRightDrawer() {
      //     setTimeout(() => {
      //       rightDrawerOpen.value = !rightDrawerOpen.value;
      //     }, 10);
      //   },
    };
  },
  methods: {
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
