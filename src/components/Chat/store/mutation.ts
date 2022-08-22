import { MutationTree } from 'vuex';
import { SET_NEW_MESSAGE, SET_NEW_MESSAGE_FROM_COMPANION } from './mutationTypes';
import { ChatData } from './types';

export const mutations: MutationTree<ChatData> = {
  [SET_NEW_MESSAGE](state, message) {
    state.messages.push(message);
  },
  [SET_NEW_MESSAGE_FROM_COMPANION](state, message) {
    state.messages[state.messages.length - 1].messageText.push(message.messageText[0]);
  },
};
