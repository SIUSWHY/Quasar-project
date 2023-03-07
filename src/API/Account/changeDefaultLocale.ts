import { axiosInstance } from '../index';

const changeDefaultLocale = (userData: { _id: string; locale: string }) =>
  axiosInstance.patch('/account/changeDefaultLocale', userData);

export default changeDefaultLocale;
