import { Cookies } from 'quasar';
import { io } from 'socket.io-client';

const apiUrl = process.env.DEV ? 'https://192.168.88.47:3000' : 'https://hermes-server.online/';
export const socket = io(apiUrl, {
  query: {
    token: Cookies.get('Token') || null,
  },
});
