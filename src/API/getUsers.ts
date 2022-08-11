import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../server/API';

const getUsers = (): Promise<AxiosResponse<string[]>> => axiosInstance.get('/users');

export default getUsers;
