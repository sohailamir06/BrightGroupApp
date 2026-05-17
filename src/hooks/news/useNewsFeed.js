import { useMemo, useState } from 'react';

import { getNewsFeedPage, getNewsMetadata } from '../../services/news/newsRepository';
import { newsActions, useNewsStore } from '../../store/news/newsStore';
import {
  filterNewsByCategory,
  searchNews,
  sortNews,
} from '../../utils/news/newsFilters';

const initialPage = getNewsFeedPage();
const metadata = getNewsMetadata();

export function useNewsFeed() {
  const newsState = useNewsStore();
  const items = newsState.items;
  const [query, setQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [activeSortId, setActiveSortId] = useState('recent');
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading] = useState(false);
  const [pageInfo] = useState(initialPage);

  const filteredItems = useMemo(() => {
    const categoryFiltered = filterNewsByCategory(items, activeCategoryId);
    return sortNews(searchNews(categoryFiltered, query), activeSortId);
  }, [activeCategoryId, activeSortId, items, query]);

  const pinnedItems = useMemo(() => sortNews(items.filter((item) => item.pinned), 'pinned'), [items]);
  const featuredItems = useMemo(() => sortNews(items.filter((item) => item.featured), 'recent'), [items]);
  const trendingItems = useMemo(() => sortNews(items.filter((item) => item.trending), 'trending'), [items]);
  const latestItems = useMemo(() => sortNews(items.filter((item) => !item.pinned), 'recent'), [items]);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 350);
  };

  return {
    items: filteredItems,
    allItems: items,
    pinnedItems,
    featuredItems,
    trendingItems,
    latestItems,
    categories: metadata.categories,
    tags: metadata.tags,
    reactions: metadata.reactions,
    authors: metadata.authors,
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    activeCategoryId,
    setActiveCategoryId,
    activeSortId,
    setActiveSortId,
    isLoading,
    refreshing,
    refresh,
    pageInfo,
    loadNextPage: () => pageInfo.hasNextPage,
    toggleSaved: newsActions.toggleBookmark,
    toggleLike: newsActions.toggleLike,
    toggleRead: newsActions.toggleRead,
    hasNoResults: !isLoading && filteredItems.length === 0,
  };
}
