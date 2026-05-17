export function searchFiles(files, query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    return files;
  }

  return files.filter((file) =>
    `${file.title} ${file.type} ${file.owner} ${file.team}`.toLowerCase().includes(term),
  );
}

export function filterFiles(files, filters) {
  return files.filter((file) => {
    const matchesCategory = filters.categoryId === 'all' || file.categoryId === filters.categoryId;
    const matchesType = !filters.fileType || file.type === filters.fileType;
    const matchesRecent = !filters.recentOnly || file.recent;
    const matchesByMe = !filters.byMeOnly || file.byMe;
    const matchesTeam = !filters.teamOnly || file.team === 'Bright Digital Team';

    return matchesCategory && matchesType && matchesRecent && matchesByMe && matchesTeam;
  });
}

export function sortFiles(files, sortId) {
  const sorted = [...files];

  if (sortId === 'name') {
    return sorted.sort((first, second) => first.title.localeCompare(second.title));
  }

  if (sortId === 'size') {
    return sorted.sort((first, second) => second.sizeMb - first.sizeMb);
  }

  if (sortId === 'favorites') {
    return sorted.sort((first, second) => Number(second.favorite) - Number(first.favorite));
  }

  return sorted.sort((first, second) => new Date(second.updatedAt).getTime() - new Date(first.updatedAt).getTime());
}

export function formatFileDate(value) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(value));
}
