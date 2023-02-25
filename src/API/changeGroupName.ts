import { axiosInstance } from './index';

const changeGroupName = (groupName: { newName: string; _id: string }) =>
  axiosInstance.patch('/room/changeGroupName', groupName);

export default changeGroupName;
