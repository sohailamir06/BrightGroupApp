import { useEffect, useMemo, useState } from 'react';

import { searchMockData } from '../../constants/mock/searchData';
import { filterSearchResults } from '../../utils/search/filterSearchResults';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(Boolean(query.trim()));

    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsLoading(false);
    }, 220);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(
    () => filterSearchResults(searchMockData.results, debouncedQuery),
    [debouncedQuery],
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
    hasQuery,
    hasNoResults,
    data: searchMockData,
  };
}
