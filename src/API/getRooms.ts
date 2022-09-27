import { AxiosResponse } from 'axios';
import { ChatsType } from 'src/layouts/store/types';
import { axiosInstance } from './index';

const getRooms = (userId: { _id: string }): Promise<AxiosResponse<ChatsType[]>> =>
  axiosInstance.post('/getRooms', userId);

export default getRooms;
