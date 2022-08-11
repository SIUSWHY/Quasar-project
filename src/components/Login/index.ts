import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
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
    ...mapMutations('userList', {
      setCurrentUser: 'SET_CURRENT_USER',
    }),
    async loginUser() {
      try {
        const { data } = await loginUser(user);
        this.setCurrentUser(data.user);
        console.log(data.user);

        this.$router.push({ path: 'chat_layout' });
      } catch (error) {
        alert(error);
      }
    },
    // onSubmit() {
    // },
  },
});
