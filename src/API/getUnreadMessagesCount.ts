import { axiosInstance } from './index';

const unreadMessagesCount = (data: { currentUserId: string; roomId: string[] }) =>
  axiosInstance.post('/getUnreadMessagesCount', data);

export default unreadMessagesCount;
