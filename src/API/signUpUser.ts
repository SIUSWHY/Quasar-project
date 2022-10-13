import { axiosInstance } from './index';

const signUpUser = (user: object) => axiosInstance.post('/signUpUser', user);

export default signUpUser;
