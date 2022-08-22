import { ActionTree } from 'vuex';
import { SET_NEW_MESSAGE, SET_NEW_MESSAGE_FROM_COMPANION } from './mutationTypes';
import { RootState, ChatData } from './types';

export const actions: ActionTree<ChatData, RootState> = {
  pushNewMessage({ commit, state }, message) {
    if (message.name === state.messages[state.messages.length - 1].name) {
      commit(SET_NEW_MESSAGE_FROM_COMPANION, message);
    } else {
      commit(SET_NEW_MESSAGE, message);
    }
  },
};
