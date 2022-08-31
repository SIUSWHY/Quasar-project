import { MutationTree } from 'vuex';
import { SET_COMPANION, SET_MESSAGES, SET_NEW_MESSAGE, SET_NEW_MESSAGE_FROM_COMPANION } from './mutationTypes';
import { ChatData } from './types';

export const mutations: MutationTree<ChatData> = {
  [SET_NEW_MESSAGE](state, message) {
    state.messages = [...state.messages, message];
  },
  [SET_NEW_MESSAGE_FROM_COMPANION](state, message) {
    state.messages[state.messages.length - 1]?.messageText.push(message.messageText[0]);
  },
  [SET_MESSAGES](state, arrMessages) {
    state.messages = [...state.messages, ...arrMessages];
  },
  [SET_COMPANION](state, companion) {
    state.companionData = companion;
  },
};
