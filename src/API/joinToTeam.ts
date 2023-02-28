import { axiosInstance } from './index';

const joinToTeam = (joinData: { link: string; _id: string }) => axiosInstance.post('/team/join', joinData);

export default joinToTeam;
