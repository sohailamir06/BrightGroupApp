import { orgDepartments, orgEmployees, orgHierarchy, orgTeams } from '../../constants/mock/orgChartData';

export async function getOrgChartBootstrap() {
  return {
    departments: orgDepartments,
    employees: orgEmployees,
    hierarchy: orgHierarchy,
    teams: orgTeams,
  };
}

export async function getTeamDetails(teamId) {
  return {
    team: orgTeams.find((item) => item.id === teamId),
    employees: orgEmployees,
  };
}
