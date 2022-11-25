import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallLayout',
  props: {},
  data() {
    return {};
  },
  created() {
    this.call();
  },
  methods: {
    call() {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    },
  },
});
