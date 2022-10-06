import { ActionTree } from 'vuex';
import {
  CLEAR_COMPANION_STORE,
  CLEAR_MESSAGE_STORE,
  SET_COMPANION_DATA,
  SET_NEW_MESSAGE,
  SET_NEW_MESSAGE_FROM_COMPANION,
} from './mutationTypes';
import { RootState, ChatData, MessageData } from './types';

export const actions: ActionTree<ChatData, RootState> = {
  pushNewMessage({ commit, state }, message) {
    if (message?.userId === state.messages[state.messages.length - 1]?.userId) {
      commit(SET_NEW_MESSAGE_FROM_COMPANION, message);
    } else {
      commit(SET_NEW_MESSAGE, message);
    }
  },
  pushMessages({ commit, state }, arrMessages: MessageData[]) {
    arrMessages.forEach(message => {
      if (message?.userId === state.messages[state.messages.length - 1]?.userId) {
        commit(SET_NEW_MESSAGE_FROM_COMPANION, message);
      } else {
        commit(SET_NEW_MESSAGE, message);
      }
    });
  },
  clearMessageStore({ commit }) {
    commit(CLEAR_MESSAGE_STORE);
  },
  clearCompanionStore({ commit }) {
    commit(CLEAR_COMPANION_STORE);
  },
  setCompanionData({ commit }, companion) {
    commit(SET_COMPANION_DATA, companion);
  },
};
