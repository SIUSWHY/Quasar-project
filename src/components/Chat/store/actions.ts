import { ActionTree } from 'vuex';
import { SET_NEW_MESSAGE } from './mutationTypes';
import { RootState, ChatData } from './types';

export const actions: ActionTree<ChatData, RootState> = {
  pushNewMessage({ commit }, message) {
    commit(SET_NEW_MESSAGE, message);
  },
};
