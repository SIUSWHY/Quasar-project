import { Months } from 'src/constants';
import { ActionTree } from 'vuex';
import {
  CLEAR_COMPANION_STORE,
  CLEAR_MESSAGE_STORE,
  SET_COMPANION_DATA,
  SET_LOADER,
  SET_NEW_GROUP_NAME,
  SET_NEW_MESSAGE,
  SET_NEW_MESSAGE_STAMP,
} from './mutationTypes';
import { RootState, ChatData, MessageData } from './types';

export const actions: ActionTree<ChatData, RootState> = {
  pushNewMessage({ commit, state }, message: MessageData) {
    const time = new Date(message.stamp);
    const selectedMonthName = Months[time.getMonth()];
    const date = selectedMonthName + ', ' + time.getDate();

    const isDateEqual = state.messages.find(message => message.label === date);
    if (!Boolean(isDateEqual)) {
      commit(SET_NEW_MESSAGE_STAMP, date);
    }
    commit(SET_NEW_MESSAGE, message);
  },

  pushMessages({ commit, dispatch, state }, arrMessages: MessageData[]) {
    try {
      arrMessages.forEach(message => {
        const time = new Date(message.stamp);
        const selectedMonthName = Months[time.getMonth()];
        const date = selectedMonthName + ', ' + time.getDate();

        const isDateEqual = state.messages.find(message => message.label === date);
        if (!Boolean(isDateEqual)) {
          commit(SET_NEW_MESSAGE_STAMP, date);
        }
        commit(SET_NEW_MESSAGE, message);
      });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch('setLoader', { key: 'messages', value: false });
    }
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

  setNewGroupName({ commit }, newName) {
    commit(SET_NEW_GROUP_NAME, newName);
  },

  setLoader({ commit }, data: { key: string | string[]; value: boolean }) {
    commit(SET_LOADER, data);
  },
};
