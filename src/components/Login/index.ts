import { Cookies, useQuasar } from 'quasar';
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
    const $q = useQuasar();
    return {
      user,
      isLoading,
      accept: null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      triggerNotify(err: any) {
        $q.notify({ type: err.type, message: err.message });
      },
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
      } catch (err) {
        isLoading.value = false;
        this.triggerNotify(err);
      }
    },
  },
});
