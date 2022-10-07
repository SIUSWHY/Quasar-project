export interface UserType {
  _id: string;
  name: string;
  time: string;
  password: string;
  caption: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: string;
}
export interface CurrentUser {
  _id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: string;
}
export interface SelectedUsers {
  _id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: string;
}

export interface UserList {
  users: UserType[];
  currentUser: CurrentUser;
  selectedUsers: SelectedUsers[];
  chats: ChatsType[];
  currentChat: CurrentChatsType;
}
export interface CurrentChatsType {
  chatType: string;
  room_name?: string;
  room_img?: string;
  roomId: string;
}
export interface ChatsType {
  __v: number;
  _id: string;
  chatType: string;
  room_name?: string;
  room_img?: string;
  roomId: string;
  users_id: UserType[];
  unreadMessagesCount: number;
}

export interface ChatsTypeWithOutUsersData {
  __v: number;
  _id: string;
  chatType: string;
  room_name?: string;
  room_img?: string;
  roomId: string;
  users_id: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
