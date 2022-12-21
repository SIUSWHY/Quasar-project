import { axiosInstance } from './index';

const getUser = (userId: string) => axiosInstance.post('/user/', userId);

export default getUser;
