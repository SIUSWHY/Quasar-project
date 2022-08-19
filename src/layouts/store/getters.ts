import getUsers from 'src/API/getUsers';
import { GetterTree } from 'vuex';
import { RootState, UserList } from './types';

export const getters: GetterTree<UserList, RootState> = {
  getCompanionData: state => (companionId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = state.users.find(user => user._id === companionId);
    if (user === null || undefined) {
      getUsers();
    }
    return user;
  },
};
