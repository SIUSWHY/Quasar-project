import { GetterTree } from 'vuex';
import { RootState, ChatData, MessageData } from './types';

export const getters: GetterTree<ChatData, RootState> = {
  getMessages(state) {
    const messages: MessageData[] = state.messages;
    const newMessages = messages.map(message => {
      const time = new Date(message.stamp);
      const stamp = time.getHours() + ':' + time.getMinutes();

      return { ...message, stamp };
    });
    return newMessages;
  },
  getCompanion(state) {
    const companion = state.companionData;
    return companion;
  },
};
