import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

const getUsers = (teamId: { teamId: string }): Promise<AxiosResponse<string[]>> =>
  axiosInstance.post('/user/all', teamId);

export default getUsers;
