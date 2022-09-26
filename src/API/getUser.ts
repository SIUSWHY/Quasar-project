import { axiosInstance } from './index';

const getUser = (userId: string) => axiosInstance.post('/getUser', userId);

export default getUser;
