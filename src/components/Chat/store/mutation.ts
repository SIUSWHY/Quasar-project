import { MutationTree } from 'vuex';
import { SET_NEW_MESSAGE } from './mutationTypes';
import { ChatData } from './types';

export const mutations: MutationTree<ChatData> = {
  [SET_NEW_MESSAGE](state, message) {
    state.messages.push(message);
  },
};
