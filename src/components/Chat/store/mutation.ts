import { MutationTree } from 'vuex';
import {
  CLEAR_COMPANION_STORE,
  CLEAR_MESSAGE_STORE,
  SET_COMPANION_DATA,
  SET_MESSAGES,
  SET_NEW_MESSAGE,
  SET_NEW_MESSAGE_FROM_COMPANION,
} from './mutationTypes';
import { ChatData } from './types';

export const mutations: MutationTree<ChatData> = {
  [SET_NEW_MESSAGE](state, message) {
    state.messages = [...state.messages, message];
  },
  [SET_NEW_MESSAGE_FROM_COMPANION](state, message) {
    state.messages[state.messages.length - 1]?.messageText.push(message.messageText[0]);
  },
  [SET_MESSAGES](state, arrMessages) {
    // state.messages = [];
    state.messages = [...state.messages, ...arrMessages];
  },
  [SET_COMPANION_DATA](state, companion) {
    state.companionData = companion;
  },
  [CLEAR_MESSAGE_STORE](state) {
    state.messages = [];
  },
  [CLEAR_COMPANION_STORE](state) {
    state.companionData = { name: '', avatar: '', _id: '' };
  },
};
