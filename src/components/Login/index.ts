import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      name: null,
      password: null,
      accept: null,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: 'chat_layout' });
    },
  },
});
