// import getUser from 'src/API/getUser';
// import { ChatData } from 'src/components/Chat/store/types';
import { MutationTree } from 'vuex';
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
import { ChatsType, CurrentChatsType, CurrentUser, UserList, UserType } from './types';

export const mutations: MutationTree<UserList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
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

  // [SET_NEW_CHAT](state, chat: ChatsType) {
  //   const filtred = state.chats.filter(chats => chat._id.includes(chats._id));
  //   // const currentUserId = state.currentUser._id;
  //   // console.log(chat);

  //   // if (filtred.length === 0) {
  //   //   const userWithoutCurrentUser = chat.users_id.find(user => user._id !== currentUserId);
  //   //   let chatData!: { name: string; avatar: string };
  //   //   debugger;

  //   //   console.log(userWithoutCurrentUser);

  //   //   if (userWithoutCurrentUser !== undefined) {
  //   //     userWithoutCurrentUser.forEach(async userId => {
  //   //       const { data: user }: any = await getUser({ _id: userId });

  //   //       chatData = { name: user.name, avatar: user.avatar };
  //   //       console.log(chatData);
  //   //     });
  //   //   } else {
  //   //     return;
  //   //   }

  //   //   chat.room_img = chatData.avatar;
  //   //   chat.room_name = chatData.name;

  //   //   state.chats = [...state.chats, chat];
  //   // }
  //   // console.log(filtred);
  // },
};
