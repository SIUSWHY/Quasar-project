import joinToTeam from 'src/API/Team/joinToTeam';
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
  created() {
    const user = this.$store.state.appData.currentUser;
    if (user._id === '') {
      this.$router.push({ path: '/' });
    }
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    async joinToTeam() {
      const user = this.getCurrentUser();
      try {
        await joinToTeam({ link: this.link, _id: user._id });
        this.$router.push('/chat_layout');
      } catch (err) {
        return;
      }
    },
    goToCreateTeam() {
      this.$router.push('/create_team');
    },
  },
});
