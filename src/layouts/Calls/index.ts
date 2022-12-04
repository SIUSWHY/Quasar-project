import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'CallItem',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    comUserId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('appData', {
      setCurrentUserForCall: 'setCurrentUserForCall',
    }),
    goToCall() {
      this.setCurrentUserForCall(this.$props.comUserId);
      this.$router.push('/chat_layout/calls/' + this.$props.comUserId);
    },
  },
});
