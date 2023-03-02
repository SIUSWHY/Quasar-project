import changeDefaultUserTeam from 'src/API/changeDefaultUserTeam';
import getCallsLogs from 'src/API/getCallsLogs';
import getCurrentUser from 'src/API/getCurrnetUser';
import getRooms from 'src/API/getRooms';
import getTeams from 'src/API/getTeams';
import unreadMessagesCount from 'src/API/getUnreadMessagesCount';
import getTeamUsers from 'src/API/getUsers';
import { ChatData } from 'src/components/Chat/store/types';
import { ActionTree } from 'vuex';
import {
  CHANGE_CHAT_STATUS,
  CHANGE_UNREAD_COUNT_MESSAGE,
  CHANGE_USER_STATUS,
  CLEAR_CHAT_DATA,
  CLEAR_SELECTED_USERS,
  GET_CHATS,
  GET_USERS,
  PUSH_SELECTED_USERS,
  SET_CALLS_LOGS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_FOR_CALL,
  SET_CURRENT_CHAT,
  SET_NEW_USER_AVATAR,
  SET_PEER_ID,
  SET_UNREAD_MESSAGES_COUNT,
  SET_USER_DEVICE_INFO,
  SET_NEW_GROUP_AVATAR,
  SET_DARK_MODE,
  SET_NEW_CHAT_NAME,
  SET_TEAMS,
  SET_CURRENT_TEAM,
  SET_NEW_CURRENT_TEAM,
  SET_NEW_DEFAULT_TEAM,
  PATCH_TEAM_IMAGE,
  PATCH_TEAM_NAME,
  DELETE_USER,
  DELETE_TEAM_FROM_STORE,
} from './mutationTypes';
import { RootState, AppData, UserStatus, TeamType } from './types';

export const actions: ActionTree<AppData, RootState> = {
  async loadUsers({ commit, state }) {
    const { data: users } = await getTeamUsers({
      teamId: state.currentUser.defaultTeam,
    });
    commit(GET_USERS, users);
  },

  setCurrentChat({ commit }, chat: ChatData) {
    commit(SET_CURRENT_CHAT, chat);
  },

  async setCurrentUser({ commit, dispatch }) {
    const { data: user } = await getCurrentUser();
    commit(SET_CURRENT_USER, user);
    await dispatch('setTeams', user.teams);
    return user._id;
  },

  pushSecelectedUsers({ commit }, user) {
    commit(PUSH_SELECTED_USERS, user);
  },

  clearSelectedUsers({ commit }) {
    commit(CLEAR_SELECTED_USERS);
  },

  async getChats({ commit, state, dispatch }, currentUserId: string) {
    const userId = state.currentUser._id;

    const { data: chats } = await getRooms({
      _id: currentUserId || userId,
      teamId: state.currentTeam._id !== undefined ? state.currentTeam._id : '',
    });
    const roomIds: string[] = chats.map(chat => chat.roomId);

    commit(GET_CHATS, chats);
    await dispatch('getUnreadMessagesCount', { currentUserId: userId, roomId: roomIds });

    return chats;
  },

  clearChatData({ commit }) {
    commit(CLEAR_CHAT_DATA);
  },

  async changeUserStatus({ commit, dispatch }, user: UserStatus) {
    commit(CHANGE_USER_STATUS, user);
    await dispatch('changeChatStatus', user);
  },

  changeChatStatus({ commit }, user: UserStatus) {
    commit(CHANGE_CHAT_STATUS, user);
  },

  async prepareData({ dispatch }) {
    const currentUserId: string = await dispatch('setCurrentUser');
    await dispatch('loadUsers');
    await dispatch('getChats', currentUserId);
  },

  // TODO: fix undefined
  async getUnreadMessagesCount(
    { commit, state },
    { currentUserId, roomId }: { currentUserId: string; roomId: string[] }
  ) {
    const userId = state.currentUser._id;
    const { data: counts } = await unreadMessagesCount({ currentUserId: userId || currentUserId, roomId: roomId });

    commit(SET_UNREAD_MESSAGES_COUNT, counts);
  },

  changeCountUnreadMessage({ commit }, roomId) {
    commit(CHANGE_UNREAD_COUNT_MESSAGE, roomId);
  },

  setUserDeviceInfo({ commit }) {
    commit(SET_USER_DEVICE_INFO);
  },

  setCurrentUserForCall({ commit, state }, userId: string) {
    const currentUser = state.users.find(user => user._id === userId);
    commit(SET_CURRENT_USER_FOR_CALL, currentUser);
  },

  setPeerId({ commit }, peerId: string) {
    commit(SET_PEER_ID, peerId);
  },

  async getCallsLogs({ commit, state }) {
    const userId = state.currentUser._id;
    const { data: logs } = await getCallsLogs({ _id: userId });

    commit(SET_CALLS_LOGS, logs);
  },

  patchUserAvatar({ commit }, user) {
    commit(SET_NEW_USER_AVATAR, user);
  },

  patchGroupAvatar({ commit }, group) {
    commit(SET_NEW_GROUP_AVATAR, group);
  },

  setDarkMode({ commit }, value: boolean) {
    commit(SET_DARK_MODE, value);
  },

  setNewChatName({ commit }, chatData: { _id: string; name: string }) {
    commit(SET_NEW_CHAT_NAME, chatData);
  },

  async setTeams({ commit, dispatch }, ids: string[]) {
    const { data: teams } = await getTeams({ ids });
    dispatch('setCurrentTeam', teams);
    commit(SET_TEAMS, teams);
  },

  setCurrentTeam({ commit }, teams) {
    commit(SET_CURRENT_TEAM, teams);
  },

  async setNewTeam({ state, commit }, id: string) {
    const team = state.teams.find(chat => chat._id === id);
    if (team) {
      const { data: newRooms } = await getRooms({ _id: state.currentUser._id, teamId: team._id });

      commit(GET_CHATS, newRooms);
      commit(SET_NEW_CURRENT_TEAM, team);
    }
  },

  async setNewDefaultTeam({ state, commit }, teamId: string) {
    await changeDefaultUserTeam({ _id: state.currentUser._id, teamId });
    commit(SET_NEW_DEFAULT_TEAM, teamId);
  },

  patchTeamData({ commit }, team: TeamType) {
    commit(PATCH_TEAM_IMAGE, team);
  },

  patchTeamName({ commit }, team: TeamType) {
    commit(PATCH_TEAM_NAME, team);
  },

  deleteUserFromStore({ commit }, _id: string) {
    commit(DELETE_USER, _id);
  },

  deleteTeam({ commit }, _id: string) {
    commit(DELETE_TEAM_FROM_STORE, _id);
  },
};
