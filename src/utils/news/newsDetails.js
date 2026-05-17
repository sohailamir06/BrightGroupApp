export function getReadingTimeLabel(minutes) {
  return `${minutes} min read`;
}

export function formatArticleMeta(article) {
  return `${article.publishedLabel} ${'\u00b7'} ${getReadingTimeLabel(article.readMinutes)}`;
}

export function mapRelatedArticles(article, relatedArticles) {
  const articleTagSet = new Set(article.tags || []);

  return relatedArticles.filter((related) => !articleTagSet.has(related.id)).slice(0, 4);
}

export function parseArticleSections(article) {
  return article.sections || [];
}

export function toggleArticleBookmark(article) {
  return { ...article, bookmarked: !article.bookmarked };
}

export function toggleArticleReaction(article) {
  return { ...article, liked: !article.liked };
}
