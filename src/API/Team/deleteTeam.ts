import { axiosInstance } from '../index';

const deleteTeam = (teamData: { teamId: string }) => axiosInstance.post('/team/deleteTeam', teamData);

export default deleteTeam;
