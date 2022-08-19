import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { UserList, RootState } from './types';

export const state: UserList = {
  currentUser: {
    name: '',
    avatar: '',
    _id: '',
  },
};

const namespaced = true;

export const chatData: Module<UserList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
