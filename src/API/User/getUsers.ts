import { AxiosResponse } from 'axios';
import { UserType } from 'src/layouts/store/types';
import { axiosInstance } from '../index';

const getTeamUsers = (teamId: { teamId: string }): Promise<AxiosResponse<UserType[]>> =>
  axiosInstance.post('/user/all', teamId);

export default getTeamUsers;
