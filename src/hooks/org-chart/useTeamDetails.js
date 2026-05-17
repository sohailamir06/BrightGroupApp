import { orgEmployees, orgTeams } from '../../constants/mock/orgChartData';
import { getTeamEmployees } from '../../utils/org-chart/orgTree';

export function useTeamDetails(teamId) {
  const team = orgTeams.find((item) => item.id === teamId) || orgTeams[0];

  return {
    team,
    employees: getTeamEmployees(team, orgEmployees),
  };
}
