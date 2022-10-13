import { useQuasar } from 'quasar';
import signUpUser from 'src/API/signUpUser';
import { defineComponent, ref } from 'vue';

const user = {
  name: 'Poseidon',
  password: 'Poseidon',
  phone: '0000000013',
  email: 'Poseidon@gmail.com',
  avatar: 'FP_Poseidon.png',
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
      try {
        await signUpUser(user);
        this.$router.push('/');
      } catch (err) {
        this.triggerNotify(err);
      }
    },
  },
});
