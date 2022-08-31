import getCompanion from 'src/API/getCompanion';
import { ActionTree } from 'vuex';
import { SET_COMPANION, SET_MESSAGES, SET_NEW_MESSAGE, SET_NEW_MESSAGE_FROM_COMPANION } from './mutationTypes';
import { RootState, ChatData } from './types';

export const actions: ActionTree<ChatData, RootState> = {
  pushNewMessage({ commit, state }, message) {
    if (message?.userId === state.messages[state.messages.length - 1]?.userId) {
      commit(SET_NEW_MESSAGE_FROM_COMPANION, message);
    } else {
      commit(SET_NEW_MESSAGE, message);
    }
  },
  pushMessages({ commit }, arrMessages) {
    commit(SET_MESSAGES, arrMessages);
  },
  async getCompanionData({ commit }, companionId) {
    const res = await getCompanion(companionId);
    const companion = res.data;

    commit(SET_COMPANION, companion);
  },
};
