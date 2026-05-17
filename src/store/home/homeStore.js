import { homeMockData } from '../../services/homeMockData';
import { createStore } from '../createStore';

const initialState = {
  activeFilters: {
    pdfOnly: false,
    recentOnly: false,
    byMeOnly: false,
    teamOnly: false,
  },
  refreshing: false,
};

export const homeStore = createStore(initialState, (setState, getState) => ({
  toggleFilter: (filterKey) =>
    setState({
      activeFilters: {
        ...getState().activeFilters,
        [filterKey]: !getState().activeFilters[filterKey],
      },
    }),
  clearFilters: () => setState(initialState),
  refresh: () => {
    setState({ refreshing: true });
    setTimeout(() => setState({ refreshing: false }), 350);
  },
}));

export const useHomeStore = homeStore.useStore;
export const homeActions = homeStore.actions;
export const homeData = homeMockData;
