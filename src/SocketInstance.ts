// import { createApp } from 'vue';
// import VueSocketIO from 'vue-3-socket.io';
// import App from '../App.vue';

import { Cookies } from 'quasar';
import { io } from 'socket.io-client';

// const socket = new VueSocketIO({
//   debug: true,
//   connection: 'http://192.168.88.47:3000',
//   // vuex: {
//   //   store,
//   //   actionPrefix: 'SOCKET_',
//   //   mutationPrefix: 'SOCKET_',
//   // },
//   // options: { path: '/my-app/' }, //Optional options
// });

// createApp(App).use(socket);

// export const useSocketIO = () => {
//   const socket = io('http://192.168.88.47:3000', {
//     query: {
//       token: Cookies.get('Token'),
//       chatType: 'double',
//     },
//   });
//   return {
//     socket,
//   };
// };

export const socket = io('http://192.168.88.47:3000', {
  query: {
    token: Cookies.get('Token'),
    chatType: 'double',
  },
});
