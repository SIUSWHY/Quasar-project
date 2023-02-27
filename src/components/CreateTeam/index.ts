import { defineComponent } from 'vue';

const team = process.env.DEV
  ? {
      name: '',
      link: '',
      avatar: '',
    }
  : {
      name: '',
      link: '',
      avatar: '',
    };

export default defineComponent({
  name: 'CreateTeam',
  components: {},
  data() {
    return {
      team,
    };
  },
  // created() {},
  // unmounted() {},
  methods: {
    setNewLink() {
      team.link = team.name.toLowerCase();
    },
  },
});
