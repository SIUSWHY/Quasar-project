import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCallsLogs = (userId: { _id: string }): Promise<AxiosResponse<any>> =>
  axiosInstance.post('/getCallLogs', userId);

export default getCallsLogs;
