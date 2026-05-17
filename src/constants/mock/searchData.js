export const searchMockData = {
  categories: [
    {
      id: 'people',
      title: 'People',
      description: 'Find colleagues and teams',
      icon: 'users',
    },
    {
      id: 'news',
      title: 'News',
      description: 'Internal updates and announcements',
      icon: 'calendar',
    },
    {
      id: 'documents',
      title: 'Documents',
      description: 'Shared files and archives',
      icon: 'file-text',
    },
    {
      id: 'policies',
      title: 'Policies',
      description: 'Guidelines and procedures',
      icon: 'shield',
    },
  ],
  trending: ['#HybridWork', '#TownHall', '#OpenEnrollment', '#Sustainability', '#Q4Roadmap'],
  recentSearches: ['Benefits 2024', 'Holiday Calendar', 'Elena Rodriguez'],
  results: [
    {
      id: 'benefits-2024',
      type: 'document',
      title: 'Benefits 2024',
      description: 'Open enrollment plan details, eligibility, and employee coverage options.',
      meta: 'Documents',
    },
    {
      id: 'holiday-calendar',
      type: 'policy',
      title: 'Holiday Calendar',
      description: 'Company holidays and regional office closure schedule.',
      meta: 'Policies',
    },
    {
      id: 'elena-rodriguez',
      type: 'person',
      title: 'Elena Rodriguez',
      description: 'Director of Strategy in the Bright Digital team.',
      meta: 'People',
    },
    {
      id: 'hybrid-work',
      type: 'news',
      title: 'Hybrid Work Update',
      description: 'Latest guidance for office collaboration and remote schedules.',
      meta: 'News',
    },
  ],
  quickAction: {
    eyebrow: 'Quick Action',
    title: 'Need help finding a specific policy?',
    body: 'Ask the BrightNow AI assistant for real-time document discovery and summarization.',
    buttonLabel: 'Start Chat',
  },
};
