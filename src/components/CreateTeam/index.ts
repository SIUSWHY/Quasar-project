import createTeam from 'src/API/createTeam';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

const teamData = {
  name: '',
  link: '',
  avatar: '',
};

export default defineComponent({
  name: 'CreateTeam',
  components: {},
  data() {
    return {
      teamData,
    };
  },
  created() {
    const user = this.getCurrentUser();
    if (user._id === '') {
      this.$router.push({ path: '/' });
    }
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUser: 'getCurrentUser',
    }),
    setNewLink() {
      teamData.link = teamData.name.toLowerCase();
    },
    async createTeam() {
      const user = this.getCurrentUser();
      const response = new FormData();
      response.append('name', teamData.name);
      response.append('link', teamData.link);
      response.append('avatar', teamData.avatar);
      response.append('userId', user._id);

      await createTeam(response);
      this.$router.push({ path: '/chat_layout' });
    },
  },
});
