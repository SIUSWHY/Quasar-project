import { axiosInstance } from '../index';

const signUpUser = (user: object) =>
  axiosInstance.post('/account/signUp', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default signUpUser;
