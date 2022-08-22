export interface CompanionUserData {
  _id: string;
  name: string;
  avatar: string;
}
export interface MessageData {
  name: string;
  stamp: string;
  massegeText: string[];
}
export interface ChatData {
  companionData: CompanionUserData;
  messages: MessageData[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
