import { axiosInstance } from './index';

const unreadMessagesCount = (data: { currentUserId: string; roomId: string[] }) =>
  axiosInstance.post('/message/unreadCount', data);

export default unreadMessagesCount;
