import { axiosInstance } from '../index';

const changeUserTheme = (themeData: { _id: string; value: boolean }) =>
  axiosInstance.patch('/account/changeUserTheme', themeData);

export default changeUserTheme;
