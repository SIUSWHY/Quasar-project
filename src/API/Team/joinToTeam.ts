import { axiosInstance } from '../index';

const joinToTeam = (joinData: { link: string; _id: string }) => axiosInstance.patch('/team/join', joinData);

export default joinToTeam;
