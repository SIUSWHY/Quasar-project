import { axiosInstance } from './index';

const changeTeamName = (teamData: { name: string; _id: string }) => axiosInstance.patch('/team/changeName', teamData);

export default changeTeamName;
