import { MutationTree } from 'vuex';
import {
  CLEAR_COMPANION_STORE,
  CLEAR_MESSAGE_STORE,
  SET_COMPANION_DATA,
  SET_MESSAGES,
  SET_NEW_MESSAGE,
  SET_NEW_MESSAGE_STAMP,
} from './mutationTypes';
import { ChatData, MessageData } from './types';

export const mutations: MutationTree<ChatData> = {
  [SET_NEW_MESSAGE_STAMP](state, date: string) {
    state.messages = [...state.messages, { label: date, messageText: [], stamp: '', userId: '' }];
  },
  [SET_NEW_MESSAGE](state, message) {
    state.messages = [...state.messages, message];
  },

  [SET_MESSAGES](state, arrMessages: MessageData[]) {
    // state.messages = [];
    state.messages = arrMessages;
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
