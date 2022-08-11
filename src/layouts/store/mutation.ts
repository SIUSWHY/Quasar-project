import { MutationTree } from 'vuex';
import { GET_USERS } from './mutationTypes';
import { UserList, UserType } from './types';

export const mutations: MutationTree<UserList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  someMutation(/* state: ExampleStateInterface */) {
    // your code
  },
};
