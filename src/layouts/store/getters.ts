import getTeamUsers from 'src/API/User/getUsers';
import { GetterTree } from 'vuex';
import { RootState, AppData } from './types';

export const getters: GetterTree<AppData, RootState> = {
  getCompanionData: state => async (companionId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = state.users.find(user => user._id === companionId);
    if (user) {
      await getTeamUsers({ teamId: state.currentUser.defaultTeam });
    }
    return user;
  },

  getUsersDataForGroupChat(state) {
    const users = state.selectedUsers;
    return users;
  },

  getChatsFromState(state) {
    const chats = state.chats;
    return chats;
  },

  getCurrentUser(state) {
    const currentUser = state.currentUser;
    return currentUser;
  },

  getUserDataForMessage(state) {
    const mapUsers = state.users.map(user => [user._id, { name: user.name, avatar: user.avatar }]);
    return Object.fromEntries(mapUsers);
  },

  getCurrentChat(state, getCountMembersFromCurrentChat) {
    const currentChatId = state.currentChat.roomId;
    const chat = state.chats.find(chat => chat.roomId === currentChatId);
    getCountMembersFromCurrentChat;
    return chat;
  },

  getCountMembersFromCurrentChat(state) {
    const currentChatId = state.currentChat.roomId;
    const chat = state.chats.find(chat => chat.roomId === currentChatId);
    const membersCount = chat?.users_id.length;
    return membersCount;
  },

  getUserDevice(state) {
    const userDeviceInfo = state.userDevice;
    return userDeviceInfo;
  },

  getUsers(state) {
    const users = state.users;
    return users;
  },

  getCurrentUserForCall(state) {
    const userForCall = state.currentUserForCall;
    return userForCall;
  },

  getPeerId(state) {
    const peerId = state.currentUserForCall.peerId;
    return peerId;
  },

  getCallsLogs(state) {
    const callLogs = state.callLogs;
    return callLogs;
  },

  getTeams(state) {
    const teams = state.teams;
    return teams;
  },

  getCurrentTeam(state) {
    const team = state.currentTeam;
    return team;
  },

  getLoader: state => async (key: string) => {
    const isLoading = state.loaders[key];
    return isLoading;
  },

  getChatLoader(state) {
    const isLoading = state.loaders['chats'];
    return isLoading;
  },
};
