import { MutationTree } from 'vuex';
import {
  CHANGE_CHAT_STATUS,
  CHANGE_UNREAD_COUNT_MESSAGE,
  CHANGE_USER_STATUS,
  CLEAR_CHAT_DATA,
  CLEAR_SELECTED_USERS,
  GET_CHATS,
  GET_USERS,
  PUSH_SELECTED_USERS,
  SET_CURRENT_USER,
  SET_CURRNT_CHAT,
  SET_UNREAD_MESSAGES_COUNT,
  SET_USER_DEVICE_INFO,
} from './mutationTypes';
import { ChatsType, CurrentChatsType, CurrentUser, AppData, UserType } from './types';

export const mutations: MutationTree<AppData> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users.map(user => ({ ...user, isOnline: false }));
  },

  [SET_CURRENT_USER](state, user: CurrentUser) {
    state.currentUser = user;
  },

  [CLEAR_CHAT_DATA](state) {
    state.currentChat = {
      chatType: '',
      roomId: '',
      room_img: '',
      room_name: '',
    };
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
  [SET_CURRNT_CHAT](state, chat: CurrentChatsType) {
    state.currentChat = { roomId: chat.roomId, chatType: chat.chatType };
  },

  [GET_CHATS](state, chats: ChatsType[]) {
    const currentUserId = state.currentUser._id;

    chats.forEach((chat: ChatsType) => {
      if (chat.chatType === 'double') {
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
      }
      return chat;
    });

    state.chats = chats;
  },

  [SET_UNREAD_MESSAGES_COUNT](state, counts: Record<string, number>) {
    state.chats = state.chats.map(chat => ({ ...chat, unreadMessagesCount: counts[chat.roomId] || 0 }));
  },

  [CHANGE_UNREAD_COUNT_MESSAGE](state, roomId: string) {
    state.chats = state.chats.map(chat => {
      if (chat.roomId === roomId) {
        chat.unreadMessagesCount += 1;
      }
      return chat;
    });
  },

  [CHANGE_USER_STATUS](state, data: { userId: string; isOnline: boolean }) {
    const usersWithChangeStatus = state.users.map(user =>
      user._id === data.userId ? { ...user, isOnline: data.isOnline } : user
    );
    state.users = usersWithChangeStatus;
  },

  [CHANGE_CHAT_STATUS](state, data: { userId: string; isOnline: boolean }) {
    const newChatsStatus = state.chats.map(chat => {
      if (chat.chatType === 'double') {
        const userWithoutCurrentUser = chat.users_id.filter(user => !data.userId.includes(user._id));
        if (Boolean(userWithoutCurrentUser)) {
          return { ...chat, isOnline: data.isOnline };
        }
        return chat;
      }
      return chat;
    });

    state.chats = newChatsStatus;
  },
  [SET_USER_DEVICE_INFO](state) {
    const deviceInfo = navigator.userAgent;
    const deviceLanguage = navigator.language;
    const device = deviceInfo.includes('Android' || 'iPhone') ? 'Mobile' : 'PC';

    state.userDevice = { ...state.userDevice, allInfo: deviceInfo, language: deviceLanguage, device: device };
  },
};
