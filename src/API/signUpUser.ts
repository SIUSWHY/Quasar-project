import { axiosInstance } from './index';

const signUpUser = (user: object) =>
  axiosInstance.post('/signUpUser', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default signUpUser;
