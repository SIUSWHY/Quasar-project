import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { AppData, RootState } from './types';

export const state: AppData = {
  users: [],
  currentUser: {
    name: '',
    avatar: '',
    _id: '',
    isDarkMode: true,
    defaultTeam: '',
    teams: [],
  },
  currentChat: {
    chatType: '',
    roomId: '',
    room_img: '',
    room_name: '',
  },
  chats: [],
  selectedUsers: [],
  userDevice: {
    name: '',
    platform: '',
  },
  currentUserForCall: {
    name: '',
    avatar: '',
    _id: '',
    peerId: '',
  },
  callLogs: [],
  teams: [],
  currentTeam: {},
  loaders:{
    chats: false,
  }
};

const namespaced = true;

export const appData: Module<AppData, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
