import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsLayout',
  components: {},
  data() {
    return {};
  },
  methods: {
    goTo() {
      this.$router.push('/chat_layout/settings/gadgets');
    },
    goTochatLayout() {
      this.$router.push('/chat_layout');
    },
  },
});
