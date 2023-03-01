import { AxiosResponse } from 'axios';
import { ChatsType } from 'src/layouts/store/types';
import { axiosInstance } from './index';

const getRooms = (userId: { _id: string; teamId: string }): Promise<AxiosResponse<ChatsType[]>> =>
  axiosInstance.post('/room/all', userId);

export default getRooms;
