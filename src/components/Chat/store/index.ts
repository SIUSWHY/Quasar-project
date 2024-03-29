import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { RootState, ChatData } from './types';

export const state: ChatData = {
  companionData: {
    name: '',
    avatar: '',
    _id: '',
  },
  messages: [],
  loaders: {
    messages: true,
  },
};

const namespaced = true;

export const chatData: Module<ChatData, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
