import { axiosInstance } from '../index';

const changeDefaultUserTeam = (userData: { _id: string; teamId: string }) =>
  axiosInstance.patch('/account/changeDefaultTeam', userData);

export default changeDefaultUserTeam;
