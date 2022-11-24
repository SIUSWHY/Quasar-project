export interface CompanionUserData {
  _id: string;
  name: string;
  avatar: string;
}
export interface MessageData {
  userId: string;
  stamp: string;
  label: string;
  messageText: string[];
}
export interface ChatData {
  companionData: CompanionUserData;
  messages: MessageData[];
}

export const enum ChatType {
  Double = 'double',
  Group = 'group',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
