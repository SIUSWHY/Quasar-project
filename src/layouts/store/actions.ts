import getCurrentUser from 'src/API/getCurrnetUser';
import getUsers from 'src/API/getUsers';
import { ActionTree } from 'vuex';
import { GET_USERS, SET_CURRENT_USER } from './mutationTypes';
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
  someAction(/* context */) {
    // your code
  },
};
