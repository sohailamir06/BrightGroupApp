import { useMemo, useState } from 'react';

import { orgDepartments, orgEmployees, orgHierarchy, orgTeams } from '../../constants/mock/orgChartData';
import { orgChartActions, useOrgChartStore } from '../../store/org-chart/orgChartStore';
import { filterEmployees } from '../../utils/org-chart/orgTree';

export function useOrgChart() {
  const [query, setQuery] = useState('');
  const [activeDepartmentId, setActiveDepartmentId] = useState('all');
  const [expandedIds, setExpandedIds] = useState(['bright-digital', 'design', 'engineering']);
  const orgState = useOrgChartStore();
  const [isLoading] = useState(false);

  const employees = useMemo(
    () => filterEmployees(orgEmployees, query, activeDepartmentId),
    [activeDepartmentId, query],
  );

  const selectedEmployee = useMemo(
    () => orgEmployees.find((employee) => employee.id === orgState.selectedEmployeeId),
    [orgState.selectedEmployeeId],
  );

  const toggleExpanded = (id) => {
    setExpandedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return {
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    departments: orgDepartments,
    employees,
    teams: orgTeams,
    hierarchy: orgHierarchy,
    activeDepartmentId,
    setActiveDepartmentId,
    expandedIds,
    toggleExpanded,
    selectedEmployee,
    setSelectedEmployeeId: orgChartActions.setSelectedEmployee,
    isLoading,
    isEmpty: !isLoading && employees.length === 0,
  };
}
