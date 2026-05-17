import { useMemo, useState } from 'react';

import { contentAuthors, contentCategories, contentTags } from '../../constants/mock/contentData';
import { contentActions, useContentStore } from '../../store/content/contentStore';
import { filterByCategory, searchContent, sortRecentlyViewed } from '../../utils/content/contentFilters';

export function useContentFeed() {
  const [query, setQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const contentState = useContentStore();
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading] = useState(false);

  const filteredPosts = useMemo(() => {
    const categoryFiltered = filterByCategory(contentState.posts, activeCategoryId);
    return sortRecentlyViewed(searchContent(categoryFiltered, query));
  }, [activeCategoryId, contentState.posts, query]);

  const recommendedPosts = useMemo(() => contentState.posts.filter((post) => post.recommended), [contentState.posts]);
  const trendingPosts = useMemo(() => contentState.posts.filter((post) => post.trending), [contentState.posts]);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 300);
  };

  return {
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    activeCategoryId,
    setActiveCategoryId,
    categories: contentCategories,
    tags: contentTags,
    authors: contentAuthors,
    posts: filteredPosts,
    recommendedPosts,
    trendingPosts,
    isLoading,
    refreshing,
    refresh,
    toggleSaved: contentActions.toggleBookmark,
    hasNoContent: !isLoading && filteredPosts.length === 0,
  };
}
