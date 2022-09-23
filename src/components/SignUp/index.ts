import { defineComponent } from 'vue';

const user = {
  name: 'Ares',
  password: 'Ares',
  email: 'Ares@gmail.com',
};

export default defineComponent({
  name: 'SignUp',
  data() {
    return { user };
  },
  methods: {},
});
