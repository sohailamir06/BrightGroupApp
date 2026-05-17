import { useMemo, useState } from 'react';

import { contentAuthors, contentCategories, contentPosts, contentTags } from '../../constants/mock/contentData';
import { filterByCategory, searchContent, sortRecentlyViewed, toggleBookmark } from '../../utils/content/contentFilters';

export function useContentFeed() {
  const [query, setQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [posts, setPosts] = useState(contentPosts);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading] = useState(false);

  const filteredPosts = useMemo(() => {
    const categoryFiltered = filterByCategory(posts, activeCategoryId);
    return sortRecentlyViewed(searchContent(categoryFiltered, query));
  }, [activeCategoryId, posts, query]);

  const recommendedPosts = useMemo(() => posts.filter((post) => post.recommended), [posts]);
  const trendingPosts = useMemo(() => posts.filter((post) => post.trending), [posts]);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 300);
  };

  const toggleSaved = (contentId) => {
    setPosts((current) => toggleBookmark(current, contentId));
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
    toggleSaved,
    hasNoContent: !isLoading && filteredPosts.length === 0,
  };
}
