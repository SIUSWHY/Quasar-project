import { axiosInstance } from '../index';

const createTeam = (team: object) =>
  axiosInstance.post('/team/create', team, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default createTeam;
