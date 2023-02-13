import { axiosInstance } from './index';

const changeGroupImage = (group: object) =>
  axiosInstance.patch('/room/changeGroupImage', group, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default changeGroupImage;
