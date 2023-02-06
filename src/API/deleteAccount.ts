import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

const deleteAccount = (userId: { _id: string }): Promise<AxiosResponse<string>> =>
  axiosInstance.post('/account/delete', userId);

export default deleteAccount;
