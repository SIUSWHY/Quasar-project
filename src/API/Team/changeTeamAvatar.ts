import { axiosInstance } from '../index';

const changeTeamAvatar = (team: object) =>
  axiosInstance.patch('/team/changeAvatar', team, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default changeTeamAvatar;
