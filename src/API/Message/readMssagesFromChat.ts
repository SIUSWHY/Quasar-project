import { axiosInstance } from '../index';

const readMessagesFromChat = (roomId: string) => axiosInstance.post('/message/read', { roomId: roomId });

export default readMessagesFromChat;
