import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

const getCurrentUser = (): Promise<AxiosResponse<string[]>> => axiosInstance.get('/currentUser');

export default getCurrentUser;
