import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'UserComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      checked: [],
    } as {
      checked: Array<string>;
    };
  },
  methods: {
    ...mapActions('appData', { pushSecelectedUsers: 'pushSecelectedUsers' }),

    clickToChouseChat() {
      this.pushSecelectedUsers(this.$props);
    },
  },
});
