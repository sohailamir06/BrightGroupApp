export const homeMockData = {
  announcements: [
    {
      id: 'strategy-roadmap',
      newsId: 'sustainability',
      category: 'Strategy',
      date: 'Oct 12, 2023',
      titlePrefix: 'Executive Briefing:',
      titleMuted: 'Finalizing the',
      highlight: 'Q3 Strategy Roadmap',
      excerpt: 'Leadership met today to define the key pillars for...',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=220&q=80',
    },
    {
      id: 'marketing-alignment',
      newsId: 'sustainability',
      category: 'Marketing',
      date: 'Oct 10, 2023',
      titlePrefix: 'Marketing',
      titleMuted: 'Alignment:',
      highlight: 'Q3 Strategy',
      titleSuffix: 'and Brand Positioning',
      excerpt: 'The global marketing team has released the...',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=220&q=80',
    },
  ],
  documents: [
    {
      id: 'q3-strategy',
      title: '2023_Q3_Strategy_V7:',
      meta: 'Shared by Sarah J.',
      type: 'pdf',
      recent: true,
      byMe: false,
      team: 'Bright Digital Team',
    },
    {
      id: 'meeting-notes',
      title: 'Meeting_Notes_Q3.doc',
      meta: 'Edited 2h ago',
      type: 'doc',
      recent: true,
      byMe: true,
      team: 'Bright Digital Team',
    },
  ],
  teammates: [
    {
      id: 'elena',
      name: 'Elena Rodriguez',
      role: 'Director of Strategy',
      online: true,
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 'marcus',
      name: 'Marcus Chen',
      role: 'Lead Project Manager',
      online: false,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
  ],
  filters: ['Only PDF', 'Past 7 days', 'By Me', 'Bright Digital Team'],
  insight: {
    title: 'Did you know?',
    body: 'The Q3 Strategy focus includes 3 major sustainability goals. You can find the full impact report in the Shared Strategy folder.',
  },
};
