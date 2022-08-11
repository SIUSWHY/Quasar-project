import { defineComponent } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'WriteMessage',
  data() {
    const $store = useStore();

    return {
      chats: $store.state.userList.users,
    };
  },
  methods: {},
});
