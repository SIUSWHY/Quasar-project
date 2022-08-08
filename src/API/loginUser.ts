import { axiosInstance } from '../../server/API/index';

const loginUser = (user: object) => axiosInstance.post('/loginUser', user);

export default loginUser;
