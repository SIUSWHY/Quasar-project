import { axiosInstance } from './index';

const loginUser = (user: object) => axiosInstance.post('/loginUser', user);

export default loginUser;
