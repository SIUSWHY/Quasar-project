import { Cookies } from 'quasar';
import { defineComponent, ref } from 'vue';
import { mapMutations } from 'vuex';
import loginUser from '../../API/loginUser';

const user = {
  name: 'Ares',
  password: 'Ares',
};
const isLoading = ref(false);
export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      user,
      isLoading,
      accept: null,
    };
  },
  methods: {
    ...mapMutations('userList', {
      setCurrentUser: 'SET_CURRENT_USER',
    }),
    async loginUser() {
      isLoading.value = true;
      try {
        const {
          data: { token },
        } = await loginUser(user);
        Cookies.set('Token', token);
        isLoading.value = false;
        this.$router.push({ path: 'chat_layout' });
      } catch (error) {
        isLoading.value = false;
        alert(error);
      }
    },
  },
});
