import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CreateTeam',
  components: {},
  data() {
    return {
      team: {
        name: ref(''),
        link: ref(''),
        avatar: ref(''),
      },
    };
  },
  // created() {},
  // unmounted() {},
  methods: {
    setNewLink() {
      this.team.link = this.team.name.toLowerCase();
    },
    createTeam() {
      console.log(this.team);
    },
  },
});
