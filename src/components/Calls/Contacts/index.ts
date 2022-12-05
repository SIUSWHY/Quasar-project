import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'ContactItem',
  props: {
    isOnline: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    _id: {
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
      this.setCurrentUserForCall(this.$props._id);
      this.$router.push('/chat_layout/calls/' + this.$props._id);
    },
  },
});
