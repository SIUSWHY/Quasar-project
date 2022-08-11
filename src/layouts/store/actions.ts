import getUsers from 'src/API/getUsers';
import { ActionTree } from 'vuex';
import { GET_USERS } from './mutationTypes';
import { RootState, UserList } from './types';

export const actions: ActionTree<UserList, RootState> = {
  async loadUsers({ commit }) {
    const { data: users } = await getUsers();
    commit(GET_USERS, users);
  },
  someAction(/* context */) {
    // your code
  },
};
