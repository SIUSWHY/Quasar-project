import { axiosInstance } from './index';

const getCompanion = (companionId: string) => axiosInstance.post('/getCompanion', companionId);

export default getCompanion;
