export interface CompanionUserData {
  _id: string;
  name: string;
  avatar: string;
}
export interface UserList {
  companionData: CompanionUserData;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
