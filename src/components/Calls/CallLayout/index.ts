import { defineComponent, ref } from 'vue';

let stream: any;
const constraints = {
  audio: true,
  video: {
    // width: { min: 1024, ideal: 1280, max: 1920 },
    // height: { min: 576, ideal: 720, max: 1080 },
    facingMode: 'environment',
  },
};

export default defineComponent({
  name: 'CallLayout',
  components: {},
  data() {
    return {
      stream,
      constraints,
    };
  },
  async mounted() {
    this.getStream();
  },
  unmounted() {
    this.stopStream();
  },
  methods: {
    async getStream() {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log('Start stream');
    },
    stopStream() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stream.value.getTracks().forEach((track: any) => () => track.stop());
      console.log('Stop stream');
    },
    toggleMute() {
      constraints.audio = !constraints.audio
      this.getStream()
    },
    toggleCam() {
      this.stopStream()
    },
    stopCall() {
      this.stopStream()
      this.$router.push('/chat_layout/calls')
    }
  },
});
