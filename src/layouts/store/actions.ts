import getCurrentUser from 'src/API/getCurrnetUser';
import getRooms from 'src/API/getRooms';
import getUsers from 'src/API/getUsers';
import { ActionTree } from 'vuex';
import { CLEAR_SELECTED_USERS, GET_CHATS, GET_USERS, PUSH_SELECTED_USERS, SET_CURRENT_USER } from './mutationTypes';
import { RootState, UserList } from './types';

export const actions: ActionTree<UserList, RootState> = {
  async loadUsers({ commit }) {
    const { data: users } = await getUsers();
    commit(GET_USERS, users);
  },
  async setCurrentUser({ commit }) {
    const { data: user } = await getCurrentUser();
    commit(SET_CURRENT_USER, user);
  },
  pushSecelectedUsers({ commit }, user) {
    commit(PUSH_SELECTED_USERS, user);
  },
  clearSelectedUsers({ commit }) {
    commit(CLEAR_SELECTED_USERS);
  },
  async getChats({ commit }, currentUserId: string) {
    const { data: chats } = await getRooms({ _id: currentUserId });
    commit(GET_CHATS, chats);
  },
};
