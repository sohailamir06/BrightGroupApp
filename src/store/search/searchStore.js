import { searchMockData } from '../../constants/mock/searchData';
import { createStore } from '../createStore';

const initialState = {
  recentSearches: searchMockData.recentSearches,
  activeCategory: 'all',
  sortId: 'relevance',
};

export const searchStore = createStore(initialState, (setState, getState) => ({
  setActiveCategory: (activeCategory) => setState({ activeCategory }),
  setSort: (sortId) => setState({ sortId }),
  addRecentSearch: (query) => {
    const normalized = query.trim();
    if (!normalized) {
      return;
    }

    setState({
      recentSearches: [
        normalized,
        ...getState().recentSearches.filter((item) => item.toLowerCase() !== normalized.toLowerCase()),
      ].slice(0, 6),
    });
  },
  clearRecentSearches: () => setState({ recentSearches: [] }),
}));

export const useSearchStore = searchStore.useStore;
export const searchActions = searchStore.actions;
