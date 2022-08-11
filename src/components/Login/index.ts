import { defineComponent } from 'vue';
import loginUser from '../../API/loginUser';

const user = {
  name: 'Ares',
  password: 'Ares',
};
export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      user,
      accept: null,
    };
  },
  methods: {
    async loginUser() {
      const test = await loginUser(user);
      console.log(test);
    },
    // onSubmit() {
    //   this.$router.push({ path: 'chat_layout' });
    // },
  },
});
