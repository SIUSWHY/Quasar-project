import { Platform } from 'quasar';
export interface UserType {
  _id: string;
  name: string;
  time: string;
  password: string;
  caption: string;
  isOnline: boolean;
  avatar: string;
}
export interface CurrentUser {
  _id: string;
  name: string;
  avatar: string;
}
export interface SelectedUsers {
  _id: string;
  name: string;
  avatar: string;
}

export interface CurrentUserForCall {
  _id: string;
  name: string;
  avatar: string;
  peerId: string;
}
export interface CallsLogs {
  _id: string;
  userId: string;
  comUserId: string;
  timeOfStartCall: Date;
  timeOfEndCall: Date;
}
export interface AppData {
  users: UserType[];
  currentUser: CurrentUser;
  selectedUsers: SelectedUsers[];
  chats: ChatsType[];
  currentChat: CurrentChatsType;
  userDevice: Platform['is'];
  currentUserForCall: CurrentUserForCall;
  callLogs: CallsLogs[]
}
export interface CurrentChatsType {
  chatType: string;
  room_name?: string;
  room_img?: string;
  roomId: string;
}

export interface UserStatus {
  userId: string;
  isOnline: boolean;
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
  isOnline?: boolean;
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
export interface RootState { }
