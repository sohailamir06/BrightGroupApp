function normalize(value) {
  return value.trim().toLowerCase();
}

export function filterSearchResults(results, query, category = 'all') {
  const searchTerm = normalize(query);

  if (!searchTerm) {
    return [];
  }

  return results.filter((item) => {
    const matchesCategory = category === 'all' || item.type === category || item.meta.toLowerCase() === category;
    const searchable = `${item.title} ${item.description} ${item.meta} ${item.type}`.toLowerCase();
    return matchesCategory && searchable.includes(searchTerm);
  });
}

export function getSearchSuggestions(results, query) {
  const searchTerm = normalize(query);

  if (!searchTerm) {
    return [];
  }

  return results
    .filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(searchTerm))
    .map((item) => item.title)
    .slice(0, 4);
}
