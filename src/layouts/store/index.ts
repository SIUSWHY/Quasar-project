import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { UserList, RootState } from './types';

export const state: UserList = {
  users: [],
  currentUser: {
    name: '',
    avatar: '',
    _id: '',
  },
  currentChat: {
    chatType: '',
    roomId: '',
    room_img: '',
    room_name: '',
  },
  chats: [],
  selectedUsers: [],
};

const namespaced = true;

export const userList: Module<UserList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
