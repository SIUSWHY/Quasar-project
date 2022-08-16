import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { UserList, RootState } from './types';

export const state: UserList = {
  users: [
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af38',
      },
      name: 'Achilles',
      password: 'Achilles',
      caption: '21',
      time: '2',
      avatar: 'FP_Achilles.png',
      link: '/chat_layout/chat/Achilles',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af39',
      },
      name: 'Aphrodite',
      password: 'Aphrodite',
      caption: '21',
      time: '2',
      avatar: 'FP_Aphrodite.png',
      link: '/chat_layout/chat/Aphrodite',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3a',
      },
      name: 'Ares',
      password: 'Ares',
      caption: '21',
      time: '2',
      avatar: 'FP_Ares.png',
      link: '/chat_layout/chat/Ares',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3b',
      },
      name: 'Artemis',
      password: 'Artemis',
      caption: '21',
      time: '2',
      avatar: 'FP_Artemis.png',
      link: '/chat_layout/chat/Artemis',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3c',
      },
      name: 'Athena',
      password: 'Athena',
      caption: '21',
      time: '2',
      avatar: 'FP_Athena.png',
      link: '/chat_layout/chat/Athena',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3d',
      },
      name: 'Chaos',
      password: 'Chaos',
      caption: '21',
      time: '2',
      avatar: 'FP_Chaos.png',
      link: '/chat_layout/chat/Chaos',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3e',
      },
      name: 'Hades',
      password: 'Hades',
      caption: '21',
      time: '2',
      avatar: 'FP_Hades.png',
      link: '/chat_layout/chat/Hades',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af3f',
      },
      name: 'Hermes',
      password: 'Hermes',
      caption: '21',
      time: '2',
      avatar: 'FP_Hermes.png',
      link: '/chat_layout/chat/Hermes',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af40',
      },
      name: 'Megaera',
      password: 'Megaera',
      caption: '21',
      time: '2',
      avatar: 'FP_Megaera.png',
      link: '/chat_layout/chat/Megaera',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af41',
      },
      name: 'Nyx',
      password: 'Nyx',
      caption: '21',
      time: '2',
      avatar: 'FP_Nyx.png',
      link: '/chat_layout/chat/Nyx',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af42',
      },
      name: 'Poseidon',
      password: 'Poseidon',
      caption: '21',
      time: '2',
      avatar: 'FP_Poseidon.png',
      link: '/chat_layout/chat/Poseidon',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af43',
      },
      name: 'Theseus',
      password: 'Theseus',
      caption: '21',
      time: '2',
      avatar: 'FP_Theseus.png',
      link: '/chat_layout/chat/Theseus',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af44',
      },
      name: 'Thanatos',
      password: 'Thanatos',
      caption: '21',
      time: '2',
      avatar: 'FP_Thanatos.png',
      link: '/chat_layout/chat/Thanatos',
    },
    {
      _id: {
        $oid: '62f3c561e4dc51b27e21af45',
      },
      name: 'Zeus',
      password: 'Zeus',
      caption: '21',
      time: '2',
      avatar: 'FP_Zeus.png',
      link: '/chat_layout/chat/Zeus',
    },
  ],
  currentUser: {
    name: '',
    avatar: '',
    link: '',
    _id: '',
  },
};

const namespaced = true;

export const userList: Module<UserList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
