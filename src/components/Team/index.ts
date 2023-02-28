import joinToTeam from 'src/API/joinToTeam';
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'TeamPage',
  components: {},
  data() {
    return {
      link: ref(''),
    };
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    async joinToTeam() {
      const user = this.getCurrentUser();
      try {
        const team = await joinToTeam({ link: this.link, _id: user._id });
        // this.$router.push('/chat_layout');
      } catch (err) {
        return;
      }
    },
    goToCreateTeam() {
      this.$router.push('/create_team');
    },
  },
});
