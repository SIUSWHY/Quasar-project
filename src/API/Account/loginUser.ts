import { axiosInstance } from '../index';

const loginUser = (user: object) => axiosInstance.post('/account/signIn', user);

export default loginUser;
