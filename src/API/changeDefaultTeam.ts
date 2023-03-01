import { axiosInstance } from './index';

const changeDefaultTeam = (teamData: { teamId: string; _id: string }) =>
  axiosInstance.patch('/team/changeDefault', teamData);

export default changeDefaultTeam;
