import { defineComponent } from 'vue';
import UserComponent from './UserComponent/index.vue';

export default defineComponent({
  name: 'CreateGroup',
  components: {
    UserComponent,
  },
  data() {
    return {};
  },
  methods: {
    goChatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
