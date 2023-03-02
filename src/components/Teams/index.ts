import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TeamsLayout',
  components: {},
  data() {
    return {
      name: this.$store.state.appData.currentTeam.teamName,
      showing: ref(false),
    };
  },
  created() {
    const team = this.$store.state.appData.currentTeam;
    if (Object.keys(team).length === 0) {
      this.$router.push({ path: 'chat_layout' });
    }
  },
  methods: {
    goChatLayout() {
      this.$router.push({ path: '/chat_layout' });
    },

    saveNewTeamName() {
      if (this.name !== this.$store.state.appData.currentTeam.teamName) {
        console.log(this.name);
      }
    },
    copyLink() {
      this.showing = true;
      navigator.clipboard.writeText(this.$store.state.appData.currentTeam.inviteLink);
      setTimeout(() => {
        this.showing = false;
      }, 500);
    },
  },
});
