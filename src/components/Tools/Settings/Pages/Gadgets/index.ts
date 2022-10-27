import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GadgetsPage',
  components: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push('/chat_layout/settings/main');
    },
  },
});
