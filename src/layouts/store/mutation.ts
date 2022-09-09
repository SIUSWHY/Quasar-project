import { MutationTree } from 'vuex';
import { GET_USERS, PUSH_SELECTED_USERS, SET_CURRENT_USER } from './mutationTypes';
import { CurrentUser, UserList, UserType } from './types';

export const mutations: MutationTree<UserList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  [SET_CURRENT_USER](state, user: CurrentUser) {
    state.currentUser = user;
  },
  [PUSH_SELECTED_USERS](state, usersId: string) {
    const foundUserInState = state.selectedUsers.find(id => id === usersId);
    if (foundUserInState === undefined) {
      state.selectedUsers = [...state.selectedUsers, usersId];
    } else {
      const filtred = state.selectedUsers.filter(id => !usersId.includes(id));
      state.selectedUsers = filtred;
    }
    console.log(foundUserInState);
  },
};
