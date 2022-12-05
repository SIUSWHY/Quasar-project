import { defineComponent } from 'vue';
import { Peer } from 'peerjs';
import { socket } from 'src/SocketInstance';
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

let myStreamData: MediaStream;
let companionStreamData: MediaStream;
const peerId = uuidv4();
const peer = new Peer(peerId)
let timeOfStartCall: Date

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
      comStreamData: {
        audio: true,
        video: true,
        cam: 'front',
      },
      myStreamData,
      timeOfStartCall,
      companionStreamData,
      currUserForCall: this.getCurrentUserForCall(),
      peerIdFromState: this.getPeerId()
    };
  },
  async mounted() {
    this.getStream();

    socket.on('send_video_status_to_client', data => {
      this.comStreamData.video = !data
    })
    socket.on('send_stop_status_to_client', () => {
      this.$router.push('/chat_layout')
    })
  },
  unmounted() {
    this.stopCall()

    socket.off('send_video_status_to_client')
    socket.off('send_stop_status_to_client')
  },
  methods: {
    ...mapGetters('appData', {
      getCurrentUserForCall: 'getCurrentUserForCall',
      getPeerId: 'getPeerId'
    }),
    ...mapGetters('appData', { getCurrentUserForCall: 'getCurrentUserForCall', getCurrentUser: 'getCurrentUser' }),
    startCallByPeer(stream: MediaStream) {
      this.myStreamData = stream;
      const call = peer.call(this.peerIdFromState, stream);
      call.on('stream', (remoteStream: MediaStream) => {
        this.companionStreamData = remoteStream
      });

      peer.on('call', (call) => {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream: MediaStream) => {
          this.companionStreamData = remoteStream
        });
      });
    },

    async getStream() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: { facingMode: 'user' },
        })
        .then(stream => {
          this.startCallByPeer(stream)
        });

      this.streamData.cam = 'front';
      console.log('Start stream');

      this.startCall()
    },
    startCall() {
      this.timeOfStartCall = new Date()
      socket.emit('send_companion_id_for_call_to_server', { companionId: this.currUserForCall._id, peerId: peerId })
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

      socket.emit('send_video_status', { video: enabled, userId: this.currUserForCall._id })
      console.log('Toggle Cam');
    },
    stopCall() {
      socket.emit('stop_call', { userId: this.currUserForCall._id })
      this.$router.push('/chat_layout');
    },
    setCallData() {
      const currUser = this.getCurrentUser()
      const timeOfEndCall = new Date()
      socket.emit('set_call_data', { userId: currUser._id, comUserId: this.currUserForCall._id, timeOfStartCall: this.timeOfStartCall, timeOfEndCall })
    }
  },
});
