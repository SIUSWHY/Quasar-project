import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { UserList, RootState } from './types';

export const state: UserList = {
  users: [
    {
      name: 'Achilles',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Achilles.png'),
      link: '/chat_layout/chat/Achilles',
    },
    {
      name: 'Aphrodite',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Aphrodite.png'),
      link: '/chat_layout/chat/Aphrodite',
    },
    {
      name: 'Ares',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Ares.png'),
      link: '/chat_layout/chat/Ares',
    },
    {
      name: 'Artemis',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Artemis.png'),
      link: '/chat_layout/chat/Artemis',
    },
    {
      name: 'Athena',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Athena.png'),
      link: '/chat_layout/chat/Athena',
    },
    {
      name: 'Chaos',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Chaos.png'),
      link: '/chat_layout/chat/Chaos',
    },
    {
      name: 'Hades',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Hades.png'),
      link: '/chat_layout/chat/Hades',
    },
    {
      name: 'Hermes',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Hermes.png'),
      link: '/chat_layout/chat/Hermes',
    },
    {
      name: 'Megaera',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Megaera.png'),
      link: '/chat_layout/chat/Megaera',
    },
    {
      name: 'Nyx',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Nyx.png'),
      link: '/chat_layout/chat/Nyx',
    },
    {
      name: 'Poseidon',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Poseidon.png'),
      link: '/chat_layout/chat/Poseidon',
    },
    {
      name: 'Theseus',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Theseus.png'),
      link: '/chat_layout/chat/Theseus',
    },
    {
      name: 'Thanatos',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Thanatos.png'),
      link: '/chat_layout/chat/Thanatos',
    },
    {
      name: 'Zeus',
      caption: '21',
      time: '2',
      avatar: require('src/assets/avatars/FP_Zeus.png'),
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
