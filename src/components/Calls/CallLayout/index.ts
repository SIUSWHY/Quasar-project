import { defineComponent } from 'vue';
import { Peer } from 'peerjs';
import { socket } from 'src/SocketInstance';
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';



let myStreamData: MediaStream;
const companionStreamData = false;
const peerId = uuidv4();

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
      myStreamData,
      companionStreamData,
      peer: new Peer(peerId)
    };
  },
  async mounted() {
    this.getStream();
  },
  unmounted() {
    this.stopStream();
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUserForCall: 'getCurrentUserForCall'
    }),
    async getStream() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: { facingMode: 'user' },
        })
        .then(stream => {
          this.myStreamData = stream;
        });

      this.streamData.cam = 'front';
      console.log('Start stream');

      this.startCall()
    },
    startCall() {
      const companionId = this.getCurrentUserForCall()._id
      socket.emit('send_companion_id_for_call_to_server', { companionId: companionId, peerId: peerId })
    },
    switchCam() {
      if (this.streamData.cam === 'front') {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: { exact: 'environment' } },
          })
          .then(stream => {
            this.myStreamData = stream;
          });
        this.streamData.cam = 'back';
      } else {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: 'user' },
          })
          .then(stream => {
            this.myStreamData = stream;
          });
        this.streamData.cam = 'front';
      }
      console.log('Switch Cam');
    },
    stopStream() {
      this.myStreamData.getVideoTracks().forEach(track => {
        track.stop();
      });

      console.log('Stop stream');
    },
    toggleMute() {
      const enabled = this.streamData.audio;
      this.myStreamData.getAudioTracks()[0].enabled = !enabled;
      this.streamData.audio = !enabled;
      console.log('Toggle Mic');
    },
    toggleCam() {
      const enabled = this.streamData.video;
      this.myStreamData.getVideoTracks()[0].enabled = !enabled;
      this.streamData.video = !enabled;
      console.log('Toggle Cam');
    },
    stopCall() {
      this.$router.push('/chat_layout');
    },
  },
});
