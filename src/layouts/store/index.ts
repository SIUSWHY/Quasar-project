import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { DasboardList, RootState } from './types';

export const state: DasboardList = {
  calendarEvents: [],
};

const namespaced = true;

export const dashboard: Module<DasboardList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
