export interface UserType {
  _id?: string;
  name: string;
  time: string;
  password: string;
  caption: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: string;
}
export interface CurrentUser {
  _id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: string;
}
export interface UserList {
  users: UserType[];
  currentUser: CurrentUser;
  selectedUsers: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
