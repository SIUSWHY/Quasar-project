import { MutationTree } from 'vuex';
import { GET_USERS, SET_CURRENT_USER } from './mutationTypes';
import { CurrentUser, UserList, UserType } from './types';

export const mutations: MutationTree<UserList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  [SET_CURRENT_USER](state, user: CurrentUser) {
    state.currentUser = user;
  },
  someMutation(/* state: ExampleStateInterface */) {
    // your code
  },
};
