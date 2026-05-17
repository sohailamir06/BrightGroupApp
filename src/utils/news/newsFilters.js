export function filterNewsByCategory(items, categoryId) {
  if (!categoryId || categoryId === 'all') {
    return items;
  }

  if (categoryId === 'saved') {
    return items.filter((item) => item.bookmarked);
  }

  if (categoryId === 'unread') {
    return items.filter((item) => !item.read);
  }

  return items.filter((item) => item.categoryId === categoryId);
}

export function searchNews(items, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const searchableText = [
      item.title,
      item.summary,
      item.body,
      item.categoryLabel,
      ...(item.tags || []),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function sortNews(items, sortKey = 'recent') {
  const sorted = [...items];

  if (sortKey === 'trending') {
    return sorted.sort((first, second) => Number(second.trending) - Number(first.trending) || second.likes - first.likes);
  }

  if (sortKey === 'pinned') {
    return sorted.sort((first, second) => Number(second.pinned) - Number(first.pinned));
  }

  return sorted.sort((first, second) => new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime());
}

export function toggleBookmark(items, newsId) {
  return items.map((item) => (item.id === newsId ? { ...item, bookmarked: !item.bookmarked } : item));
}

export function toggleReadState(items, newsId) {
  return items.map((item) => (item.id === newsId ? { ...item, read: !item.read } : item));
}

export function markAsRead(items, newsId) {
  return items.map((item) => (item.id === newsId ? { ...item, read: true } : item));
}

export function toggleReaction(items, newsId) {
  return items.map((item) => {
    if (item.id !== newsId) {
      return item;
    }

    return {
      ...item,
      liked: !item.liked,
      likes: item.liked ? item.likes - 1 : item.likes + 1,
    };
  });
}
