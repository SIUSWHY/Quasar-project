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
        cam: 'front',
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
          video: { facingMode: 'user' },
        })
        .then(stream => {
          this.streamDataObj = stream;
        });
      this.streamData.cam = 'front';

      console.log('Start stream');
    },
    switchCam() {
      if (this.streamData.cam === 'front') {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: { exact: 'environment' } },
          })
          .then(stream => {
            this.streamDataObj = stream;
          });
        this.streamData.cam = 'back';
      } else {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: 'user' },
          })
          .then(stream => {
            this.streamDataObj = stream;
          });
        this.streamData.cam = 'front';
      }
      console.log('Switch Cam');
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
