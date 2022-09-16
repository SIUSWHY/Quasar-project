import { axiosInstance } from './index';

const getRooms = (userId: { _id: string }) => axiosInstance.post('/getRooms', userId);

export default getRooms;
