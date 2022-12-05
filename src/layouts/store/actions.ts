import getCallsLogs from 'src/API/getCallsLogs';
import getCurrentUser from 'src/API/getCurrnetUser';
import getRooms from 'src/API/getRooms';
import unreadMessagesCount from 'src/API/getUnreadMessagesCount';
import getUsers from 'src/API/getUsers';
import { ChatData } from 'src/components/Chat/store/types';
import { ActionTree } from 'vuex';
import {
  CHANGE_CHAT_STATUS,
  CHANGE_UNREAD_COUNT_MESSAGE,
  CHANGE_USER_STATUS,
  CLEAR_CHAT_DATA,
  CLEAR_SELECTED_USERS,
  GET_CHATS,
  GET_USERS,
  PUSH_SELECTED_USERS,
  SET_CALLS_LOGS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_FOR_CALL,
  SET_CURRNT_CHAT,
  SET_PEER_ID,
  SET_UNREAD_MESSAGES_COUNT,
  SET_USER_DEVICE_INFO,
} from './mutationTypes';
import { RootState, AppData, UserStatus } from './types';

export const actions: ActionTree<AppData, RootState> = {
  async loadUsers({ commit }) {
    const { data: users } = await getUsers();
    commit(GET_USERS, users);
  },

  setCurrentChat({ commit }, chat: ChatData) {
    commit(SET_CURRNT_CHAT, chat);
  },

  async setCurrentUser({ commit }) {
    const { data: user } = await getCurrentUser();
    commit(SET_CURRENT_USER, user);
    return user._id;
  },

  pushSecelectedUsers({ commit }, user) {
    commit(PUSH_SELECTED_USERS, user);
  },

  clearSelectedUsers({ commit }) {
    commit(CLEAR_SELECTED_USERS);
  },

  async getChats({ commit, state, dispatch }, currentUserId: string) {
    const userId = state.currentUser._id;

    const { data: chats } = await getRooms({ _id: currentUserId || userId });
    const roomIds: string[] = chats.map(chat => chat.roomId);

    commit(GET_CHATS, chats);
    await dispatch('getUnreadMessagesCount', { currentUserId: userId, roomId: roomIds });

    return chats;
  },

  clearChatData({ commit }) {
    commit(CLEAR_CHAT_DATA);
  },

  async changeUserStatus({ commit, dispatch }, user: UserStatus) {
    commit(CHANGE_USER_STATUS, user);
    await dispatch('changeChatStatus', user);
  },

  changeChatStatus({ commit }, user: UserStatus) {
    commit(CHANGE_CHAT_STATUS, user);
  },

  async prepareData({ dispatch }) {
    await dispatch('loadUsers');
    const currentUserId: string = await dispatch('setCurrentUser');
    await dispatch('getChats', currentUserId);
  },

  // TODO: fix undefined
  async getUnreadMessagesCount(
    { commit, state },
    { currentUserId, roomId }: { currentUserId: string; roomId: string[] }
  ) {
    const userId = state.currentUser._id;
    const { data: counts } = await unreadMessagesCount({ currentUserId: userId || currentUserId, roomId: roomId });

    commit(SET_UNREAD_MESSAGES_COUNT, counts);
  },

  changeCountUnreadMessage({ commit }, roomId) {
    commit(CHANGE_UNREAD_COUNT_MESSAGE, roomId);
  },
  setUserDeviceInfo({ commit }) {
    commit(SET_USER_DEVICE_INFO);
  },
  setCurrentUserForCall({ commit, state }, userId: string) {
    const currentUser = state.users.find(user => user._id === userId);
    commit(SET_CURRENT_USER_FOR_CALL, currentUser);
  },
  setPeerId({ commit }, peerId: string) {
    commit(SET_PEER_ID, peerId)
  },
  async getCallsLogs({ commit, state }) {
    const userId = state.currentUser._id
    const { data: logs } = await getCallsLogs({ _id: userId })

    commit(SET_CALLS_LOGS, logs)
  }
};
