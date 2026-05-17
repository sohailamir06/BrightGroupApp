import { useMemo, useState } from 'react';

import { getNewsArticleDetails, getNewsMetadata, getRelatedNewsArticles } from '../../services/news/newsRepository';
import {
  mapRelatedArticles,
  parseArticleSections,
  toggleArticleBookmark,
  toggleArticleReaction,
} from '../../utils/news/newsDetails';

const metadata = getNewsMetadata();

export function useNewsDetails(newsId) {
  const [item, setItem] = useState(() => ({ ...getNewsArticleDetails(newsId), read: true }));
  const [isLoading] = useState(false);
  const [error] = useState(null);

  const author = useMemo(() => metadata.authors[item.authorId], [item.authorId]);
  const sections = useMemo(() => parseArticleSections(item), [item]);
  const relatedArticles = useMemo(() => mapRelatedArticles(item, getRelatedNewsArticles()), [item]);

  return {
    item,
    author,
    sections,
    relatedArticles,
    reactions: metadata.reactions,
    isLoading,
    error,
    toggleBookmark: () => setItem((current) => toggleArticleBookmark(current)),
    toggleLike: () => setItem((current) => toggleArticleReaction(current)),
    toggleRead: () => setItem((current) => ({ ...current, read: !current.read })),
  };
}
