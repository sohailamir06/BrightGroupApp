import { orgDepartments, orgEmployees, orgHierarchy, orgTeams } from '../../constants/mock/orgChartData';
import { createStore } from '../createStore';

export const orgChartStore = createStore(
  {
    departments: orgDepartments,
    employees: orgEmployees,
    teams: orgTeams,
    hierarchy: orgHierarchy,
    selectedEmployeeId: null,
    zoom: 1,
    orientation: 'vertical',
  },
  (setState) => ({
    setSelectedEmployee: (selectedEmployeeId) => setState({ selectedEmployeeId }),
    setZoom: (zoom) => setState({ zoom }),
    setOrientation: (orientation) => setState({ orientation }),
  }),
);

export const useOrgChartStore = orgChartStore.useStore;
export const orgChartActions = orgChartStore.actions;
