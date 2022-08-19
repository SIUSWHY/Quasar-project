export interface CurrentUser {
  _id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
}
export interface UserList {
  currentUser: CurrentUser;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
