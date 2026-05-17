import { useMemo } from 'react';

import { contentAuthors } from '../../constants/mock/contentData';
import { contentActions, useContentStore } from '../../store/content/contentStore';

export function useContentDetails(contentId) {
  const contentState = useContentStore();
  const sourcePost = contentState.posts.find((item) => item.id === contentId) || contentState.posts[0];

  const post = useMemo(() => sourcePost, [sourcePost]);

  return {
    post,
    author: contentAuthors[post.authorId],
    toggleBookmark: () => contentActions.toggleBookmark(post.id),
    toggleLike: () => contentActions.toggleLike(post.id),
  };
}
