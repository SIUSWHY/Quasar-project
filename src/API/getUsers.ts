import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

const getUsers = (): Promise<AxiosResponse<string[]>> => axiosInstance.get('/users');

export default getUsers;
