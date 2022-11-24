import { axiosInstance } from './index';

const readMessagesFromChat = (roomId: string) => axiosInstance.post('/readMessages', { roomId: roomId });

export default readMessagesFromChat;
