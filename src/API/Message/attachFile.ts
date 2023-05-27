import { axiosInstance } from '../index';

const uploadFile = (attach: object) =>
  axiosInstance.post('/message/attachFile', attach, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default uploadFile;
