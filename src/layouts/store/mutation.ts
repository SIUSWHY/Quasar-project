import { MutationTree } from 'vuex';
import { CLEAR_SELECTED_USERS, GET_CHATS, GET_USERS, PUSH_SELECTED_USERS, SET_CURRENT_USER } from './mutationTypes';
import { ChatsType, CurrentUser, UserList, UserType } from './types';

export const mutations: MutationTree<UserList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  [SET_CURRENT_USER](state, user: CurrentUser) {
    state.currentUser = user;
  },
  [PUSH_SELECTED_USERS](state, user: { name: string; _id: string; avatar: string }) {
    const newSelectedUsers = [...state.selectedUsers];

    const indexSelectedUser = newSelectedUsers.findIndex(selectedUser => selectedUser._id === user._id);
    if (indexSelectedUser === -1) {
      newSelectedUsers.unshift(user);
    } else {
      newSelectedUsers.splice(indexSelectedUser, 1);
    }
    state.selectedUsers = newSelectedUsers;
  },
  [CLEAR_SELECTED_USERS](state) {
    state.selectedUsers = [];
  },
  [GET_CHATS](state, chats: ChatsType[]) {
    const currentUserId = state.currentUser._id;

    chats.forEach((chat: ChatsType) => {
      const userWithoutCurrentUser = chat.users_id.filter(user => !currentUserId.includes(user._id));
      let chatData!: { name: string; avatar: string };

      if (userWithoutCurrentUser.length !== 0) {
        userWithoutCurrentUser.forEach((user: UserType) => {
          chatData = { name: user.name, avatar: user.avatar };
        });
      } else {
        return;
      }

      chat.room_img = chatData.avatar;
      chat.room_name = chatData.name;
    });

    state.chats = chats;
  },
};
