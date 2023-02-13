import { axiosInstance } from './index';

const changeUserAvatar = (user: object) =>
  axiosInstance.patch('/account/changeUserAvatar', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default changeUserAvatar;
