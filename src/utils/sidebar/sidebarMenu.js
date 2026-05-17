export function canAccessMenuItem(item, permissions) {
  if (!item.route) {
    return true;
  }

  return permissions.allowedRoutes.includes(item.route);
}

export function getVisibleMenuGroups(groups, permissions) {
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => canAccessMenuItem(item, permissions)),
    }))
    .filter((group) => group.items.length > 0);
}

export function getActiveMenuItemId(groups, routeName) {
  for (const group of groups) {
    const item = group.items.find((entry) => entry.route === routeName || entry.active);
    if (item) {
      return item.id;
    }
  }

  return null;
}
