import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'UserList',
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
    caption: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('chatData', {
      setCompanionData: 'setCompanionData',
    }),
    selectData() {
      this.setCompanionData(this.$props);
    },
  },
});
