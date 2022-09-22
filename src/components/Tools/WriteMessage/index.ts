import { defineComponent, ref } from 'vue';
import UserList from './UserList/index.vue';
import MessageModal from './Modal/index.vue';

const rightDrawerOpen = ref(false);
export default defineComponent({
  name: 'WriteMessage',
  components: {
    UserList,
    MessageModal,
  },
  data() {
    return {
      isMessageModalOpen: ref(false),
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
  methods: {},
});
