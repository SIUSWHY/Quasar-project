import { AxiosResponse } from 'axios';
import { TeamType } from 'src/layouts/store/types';
import { axiosInstance } from './index';

const getTeams = (userId: { ids: string[] }): Promise<AxiosResponse<TeamType[]>> =>
  axiosInstance.post('/team/all', userId);

export default getTeams;
