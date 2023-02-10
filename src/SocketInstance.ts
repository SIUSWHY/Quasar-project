import { Cookies } from 'quasar';
import { io } from 'socket.io-client';

const apiUrl = process.env.DEV ? 'https://hermes-server.online/' : 'https://hermes-server.online/';
export const socket = io(apiUrl, {
  path: '/api/socket/',
  query: {
    token: Cookies.get('Token') || null,
  },
});
