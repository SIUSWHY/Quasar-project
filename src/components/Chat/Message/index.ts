import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MessageComponent',
  props: {
    message: {
      type: Object as PropType<{
        _id: string;
        userId: string;
      }>,
      requared: true,
    },
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      user: this.$store.getters['appData/getUserDataForMessage'][this.$props.message!.userId],
      isActionsOpen: false,
    };
  },
  methods: {
    messActions(messageId: string) {
      console.log(messageId);
      this.isActionsOpen = true;
    },
  },
});
