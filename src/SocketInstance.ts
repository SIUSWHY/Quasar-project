import { Cookies } from 'quasar';
import { io } from 'socket.io-client';

// export const socket = io('https://quasar-server.onrender.com/', {
export const socket = io('http://192.168.88.47:3000', {
  query: {
    token: Cookies.get('Token'),
    chatType: 'double',
  },
});
