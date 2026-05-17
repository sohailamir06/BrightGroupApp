export const homeFilterMap = {
  'Only PDF': 'pdfOnly',
  'Past 7 days': 'recentOnly',
  'By Me': 'byMeOnly',
  'Bright Digital Team': 'teamOnly',
};

export function filterHomeDocuments(documents, activeFilters) {
  return documents.filter((document) => {
    const matchesPdf = !activeFilters.pdfOnly || document.type === 'pdf';
    const matchesRecent = !activeFilters.recentOnly || document.recent;
    const matchesOwner = !activeFilters.byMeOnly || document.byMe;
    const matchesTeam = !activeFilters.teamOnly || document.team === 'Bright Digital Team';

    return matchesPdf && matchesRecent && matchesOwner && matchesTeam;
  });
}
