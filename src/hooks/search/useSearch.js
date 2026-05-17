import { useEffect, useMemo, useState } from 'react';

import { searchMockData } from '../../constants/mock/searchData';
import { searchActions, useSearchStore } from '../../store/search/searchStore';
import { filterSearchResults, getSearchSuggestions } from '../../utils/search/filterSearchResults';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const searchState = useSearchStore();

  useEffect(() => {
    setIsLoading(Boolean(query.trim()));

    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      searchActions.addRecentSearch(query);
      setIsLoading(false);
    }, 220);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(
    () => filterSearchResults(searchMockData.results, debouncedQuery, searchState.activeCategory),
    [debouncedQuery, searchState.activeCategory],
  );
  const suggestions = useMemo(
    () => getSearchSuggestions(searchMockData.results, query),
    [query],
  );

  const hasQuery = Boolean(debouncedQuery.trim());
  const hasNoResults = hasQuery && !isLoading && results.length === 0;

  return {
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    debouncedQuery,
    isLoading,
    results,
    suggestions,
    activeCategory: searchState.activeCategory,
    setActiveCategory: searchActions.setActiveCategory,
    recentSearches: searchState.recentSearches,
    hasQuery,
    hasNoResults,
    data: searchMockData,
  };
}
