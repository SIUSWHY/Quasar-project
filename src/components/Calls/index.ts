import { defineComponent } from 'vue';
import Contact from './Contacts/index.vue';

export default defineComponent({
  name: 'CallsComponent',
  components: {
    Contact,
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
