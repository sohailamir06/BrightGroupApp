function normalize(value) {
  return value.trim().toLowerCase();
}

export function filterSearchResults(results, query) {
  const searchTerm = normalize(query);

  if (!searchTerm) {
    return [];
  }

  return results.filter((item) => {
    const searchable = `${item.title} ${item.description} ${item.meta} ${item.type}`.toLowerCase();
    return searchable.includes(searchTerm);
  });
}
