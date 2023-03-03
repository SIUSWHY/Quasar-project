import { axiosInstance } from '../index';

const deleteUserFromTeam = (teamData: { _id: string; teamId: string }) =>
  axiosInstance.post('/team/deleteUser', teamData);

export default deleteUserFromTeam;
