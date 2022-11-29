import { defineComponent } from 'vue';

let streamDataObj: MediaStream;

export default defineComponent({
  name: 'CallLayout',
  components: {},
  data() {
    return {
      streamData: {
        audio: true,
        video: true,
      },
      streamDataObj,
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
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then(stream => {
          this.streamDataObj = stream;
        });

      console.log('Start stream');
    },
    stopStream() {
      this.streamDataObj.getVideoTracks().forEach(track => {
        track.stop();
      });

      console.log('Stop stream');
    },
    toggleMute() {
      const enabled = this.streamData.audio;
      this.streamDataObj.getAudioTracks()[0].enabled = !enabled;
      this.streamData.audio = !enabled;
      console.log('Toggle Mic');
    },
    toggleCam() {
      const enabled = this.streamData.video;
      this.streamDataObj.getVideoTracks()[0].enabled = !enabled;
      this.streamData.video = !enabled;
      console.log('Toggle Cam');
    },
    stopCall() {
      this.$router.push('/chat_layout/calls');
    },
  },
});
