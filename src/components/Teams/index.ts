import { useQuasar } from 'quasar';
import changeTeamAvatar from 'src/API/Team/changeTeamAvatar';
import changeTeamName from 'src/API/Team/changeTeamName';
import deleteTeam from 'src/API/Team/deleteTeam';
import deleteUserFromTeam from 'src/API/Team/deleteUserFromTeam';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'TeamsLayout',
  components: {},
  data() {
    return {
      isDeleting: ref(false),
      $q: useQuasar(),
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
    ...mapActions('appData', {
      patchTeamData: 'patchTeamData',
      patchTeamName: 'patchTeamName',
      deleteUserFromStore: 'deleteUserFromStore',
    }),
    goChatLayout() {
      this.$router.push({ path: '/chat_layout' });
    },

    async saveNewTeamName() {
      if (this.name !== this.$store.state.appData.currentTeam.teamName) {
        const { data: team } = await changeTeamName({
          _id: this.$store.state.appData.currentTeam._id,
          name: this.name,
        });
        this.patchTeamName(team);
      }
    },
    copyLink() {
      this.showing = true;
      navigator.clipboard.writeText(this.$store.state.appData.currentTeam.inviteLink);
      setTimeout(() => {
        this.showing = false;
      }, 500);
    },
    changeUserAvatar() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/png, image/jpeg, image/gif';
      input.onchange = async () => {
        if (input.files !== null) {
          const teamId = this.$store.state.appData.currentTeam._id;
          const response = new FormData();
          response.append('_id', teamId);
          response.append('avatar', input.files[0]);
          const { data: team } = await changeTeamAvatar(response);
          this.patchTeamData(team);
        }
      };
      input.click();
    },
    async deleteUser(_id: string) {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Are you sure you want to delete the user?',
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          await deleteUserFromTeam({ _id, teamId: this.$store.state.appData.currentTeam._id });
          this.deleteUserFromStore(_id);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    },
    async deleteTeam() {
      this.$q
        .dialog({
          message: 'Are you sure you want to delete this team?',
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          this.isDeleting = true;
          await deleteTeam({ teamId: this.$store.state.appData.currentTeam._id });
          this.isDeleting = false;
          this.$router.push({ path: 'chat_layout' });
        });
    },
  },
});
