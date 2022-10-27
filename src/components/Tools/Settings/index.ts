import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SettingsPage',
  components: {},
  data() {
    return {
      isActionModalOpen: ref(false),
    };
  },
  methods: {
    goTochatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
