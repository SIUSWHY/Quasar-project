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
  messages: [
    {
      name: '62f3c561e4dc51b27e21af3a',
      stamp: '21:30',
      messageText: ['hey, how are you', 'test', 'test,test,testtest,test,test,test'],
    },
    {
      name: 'Jane',
      stamp: '21:30',
      messageText: [
        'doing fine, how r you?',
        'test',
        'doing fine, how r you doing fine, how r you doing fine, how r you doing fine, how r you',
      ],
    },
  ],
};

const namespaced = true;

export const chatData: Module<ChatData, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
