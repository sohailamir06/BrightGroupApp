import { useMemo, useState } from 'react';

import { contentAuthors, contentPosts } from '../../constants/mock/contentData';

export function useContentDetails(contentId) {
  const sourcePost = contentPosts.find((item) => item.id === contentId) || contentPosts[0];
  const [bookmarked, setBookmarked] = useState(Boolean(sourcePost.bookmarked));
  const [liked, setLiked] = useState(Boolean(sourcePost.liked));

  const post = useMemo(
    () => ({
      ...sourcePost,
      bookmarked,
      liked,
      likes: sourcePost.likes + (liked && !sourcePost.liked ? 1 : 0),
    }),
    [bookmarked, liked, sourcePost],
  );

  return {
    post,
    author: contentAuthors[post.authorId],
    toggleBookmark: () => setBookmarked((current) => !current),
    toggleLike: () => setLiked((current) => !current),
  };
}
