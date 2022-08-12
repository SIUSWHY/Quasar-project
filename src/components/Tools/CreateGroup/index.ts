import { defineComponent, ref } from 'vue';
import UserList from './UserList/index.vue';

export default defineComponent({
  name: 'CreateGroup',
  components: {
    UserList,
  },
  data() {
    const rightDrawerOpen = ref(false);

    return {
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
  methods: {
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
