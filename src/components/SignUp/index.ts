import { useQuasar } from 'quasar';
import signUpUser from 'src/API/Account/signUpUser';
import { defineComponent, ref } from 'vue';

const user = process.env.DEV
  ? {
      name: 'Test',
      password: 'Test',
      phone: '00000000000',
      email: 'Test@gmail.com',
      avatar: '',
    }
  : {
      name: '',
      password: '',
      phone: '',
      email: '',
      avatar: '',
    };

export default defineComponent({
  name: 'SignUp',
  data() {
    const $q = useQuasar();
    return {
      user,
      isPassword: ref(true),
      isLoading: ref(false),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      triggerNotify(err: any) {
        $q.notify({ type: err.type, message: err.message });
      },
    };
  },
  methods: {
    async createNewUser() {
      const response = new FormData();
      response.append('name', user.name);
      response.append('password', user.password);
      response.append('phone', user.phone);
      response.append('email', user.email);
      response.append('avatar', user.avatar);
      try {
        await signUpUser(response);
        this.$router.push('/join_to_team');
      } catch (err) {
        this.triggerNotify(err);
      }
    },
  },
});
