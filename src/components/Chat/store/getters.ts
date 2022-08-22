import { GetterTree } from 'vuex';
import { RootState, ChatData } from './types';

export const getters: GetterTree<ChatData, RootState> = {
  getMessages(state) {
    const messages = state.messages;
    return messages;
  },
};
