export interface UserType {
  _id?: string;
  name: string;
  time: string;
  caption: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
}
export interface UserList {
  users: UserType[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
