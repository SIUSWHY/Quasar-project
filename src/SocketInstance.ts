import { Cookies } from 'quasar';
import { io } from 'socket.io-client';

export const socket = io('https://quasar-server.onrender.com/', {
  // export const socket = io('http://192.168.0.109:3000', {
  query: {
    token: null,
    chatType: 'double',
  },
});
