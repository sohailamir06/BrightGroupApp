export function searchContent(posts, query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    return posts;
  }

  return posts.filter((post) => {
    const searchable = `${post.title} ${post.categoryLabel} ${post.excerpt} ${post.type}`.toLowerCase();
    return searchable.includes(term);
  });
}

export function filterByCategory(posts, categoryId) {
  if (!categoryId || categoryId === 'all') {
    return posts;
  }

  return posts.filter((post) => post.categoryId === categoryId);
}

export function sortRecentlyViewed(posts) {
  return [...posts];
}

export function toggleBookmark(posts, contentId) {
  return posts.map((post) =>
    post.id === contentId ? { ...post, bookmarked: !post.bookmarked } : post,
  );
}
