import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeamPage',
  components: {},
  data() {
    return {};
  },
  methods: {
    goToCreateTeam() {
      this.$router.push('/create_team');
    },
  },
});
