import { defineComponent, ref } from 'vue';

const user = {
  name: 'Ares',
  password: 'Ares',
  phone: '0000000000',
  email: 'Ares@gmail.com',
};

export default defineComponent({
  name: 'SignUp',
  data() {
    return { user, isPassword: ref(true), isLoading: ref(false) };
  },
  methods: {
    createNewUser() {
      console.log(user);
    },
  },
});
