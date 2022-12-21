import { axiosInstance } from './index';

const getCompanion = (companionId: string) => axiosInstance.post('/user/companion', companionId);

export default getCompanion;
