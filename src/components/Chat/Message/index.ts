import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageComponent',
  props: {
    message: {
      type: Object,
    },
    // text: {
    //   type: String,
    // },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.message);
    // debugger;
  },
  methods: {},
});
