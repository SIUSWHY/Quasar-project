import getCurrentUser from 'src/API/getCurrnetUser';
import getRooms from 'src/API/getRooms';
import unreadMessagesCount from 'src/API/getUnreadMessagesCount';
import getUsers from 'src/API/getUsers';
import { ChatData } from 'src/components/Chat/store/types';
import { ActionTree } from 'vuex';
import {
  CHANGE_UNREAD_COUNT_MESSAGE,
  CLEAR_CHAT_DATA,
  CLEAR_SELECTED_USERS,
  GET_CHATS,
  GET_USERS,
  PUSH_SELECTED_USERS,
  SET_CURRENT_USER,
  SET_CURRNT_CHAT,
  // SET_NEW_CHAT,
  SET_UNREAD_MESSAGES_COUNT,
} from './mutationTypes';
import { RootState, UserList } from './types';

export const actions: ActionTree<UserList, RootState> = {
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

  // setNewChat({ commit }, chat) {
  //   commit(SET_NEW_CHAT, chat);
  // },

  async prepareData({ dispatch }) {
    await dispatch('loadUsers');
    const currentUserId: string = await dispatch('setCurrentUser');
    await dispatch('getChats', currentUserId);
  },

  async getUnreadMessagesCount({ commit }, { currentUserId, roomId }) {
    const { data: counts } = await unreadMessagesCount({ currentUserId: currentUserId, roomId: roomId });

    commit(SET_UNREAD_MESSAGES_COUNT, counts);
  },

  changeCountUnreadMessage({ commit }, roomId) {
    commit(CHANGE_UNREAD_COUNT_MESSAGE, roomId);
  },
};
