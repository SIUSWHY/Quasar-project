import { axiosInstance } from './index';

const getUser = (userId: any) => axiosInstance.post('/getUser', userId);

export default getUser;
