export function filterEmployees(employees, query, departmentId) {
  const term = query.trim().toLowerCase();

  return employees.filter((employee) => {
    const matchesDepartment = !departmentId || departmentId === 'all' || employee.departmentId === departmentId;
    const searchable = `${employee.name} ${employee.title} ${employee.location} ${employee.bio}`.toLowerCase();
    return matchesDepartment && (!term || searchable.includes(term));
  });
}

export function findHierarchyNode(node, id) {
  if (node.id === id) {
    return node;
  }

  for (const child of node.children || []) {
    if (typeof child === 'string') {
      continue;
    }

    const match = findHierarchyNode(child, id);
    if (match) {
      return match;
    }
  }

  return null;
}

export function getTeamEmployees(team, employees) {
  return team.memberIds.map((id) => employees.find((employee) => employee.id === id)).filter(Boolean);
}
