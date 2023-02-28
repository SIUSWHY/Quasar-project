import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

const getTeams = (userId: { ids: string[] }): Promise<AxiosResponse<any[]>> => axiosInstance.post('/team/all', userId);

export default getTeams;
