import { AxiosResponse } from 'axios';
import { UserType } from 'src/layouts/store/types';
import { axiosInstance } from './index';

const getCurrentUser = (): Promise<AxiosResponse<UserType>> => axiosInstance.get('/user/current');

export default getCurrentUser;
