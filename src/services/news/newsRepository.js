import {
  newsArticleDetails,
  newsAuthors,
  newsCategories,
  newsDetailAuthors,
  newsItems,
  newsReactions,
  newsTags,
  relatedNewsArticles,
} from '../../constants/mock/newsData';

export function getNewsFeedPage({ page = 1, pageSize = 10 } = {}) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: newsItems.slice(start, end),
    page,
    pageSize,
    hasNextPage: end < newsItems.length,
  };
}

export function getNewsMetadata() {
  return {
    authors: { ...newsAuthors, ...newsDetailAuthors },
    categories: newsCategories,
    tags: newsTags,
    reactions: newsReactions,
  };
}

export function getNewsById(newsId) {
  return newsItems.find((item) => item.id === newsId) || newsItems[0];
}

export function getNewsArticleDetails(newsId) {
  const article = Object.values(newsArticleDetails).find(
    (item) => item.id === newsId || item.sourceNewsIds?.includes(newsId),
  );

  return article || newsArticleDetails.sustainability;
}

export function getRelatedNewsArticles() {
  return relatedNewsArticles;
}
