import changeDefaultLocale from 'src/API/Account/changeDefaultLocale';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'GadgetsPage',
  components: {},
  data() {
    return {
      language: ref(this.$store.state.appData.currentUser.locale),
    };
  },

  methods: {
    ...mapActions('appData', { changeDefLocale: 'changeDefLocale' }),
    goBack() {
      this.$router.push('/settings/main');
    },
    async changeLocale(val: string) {
      this.changeDefLocale(val);
      if (this.$root) {
        this.$root.$i18n.locale = val;
      }
      await changeDefaultLocale({ _id: this.$store.state.appData.currentUser._id, locale: val });
    },
  },
});
