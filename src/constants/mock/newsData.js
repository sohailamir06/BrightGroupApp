export const newsAuthors = {
  leadership: {
    id: 'leadership',
    name: 'Leadership Office',
    role: 'Executive Communications',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
  },
  engineering: {
    id: 'engineering',
    name: 'Platform Engineering',
    role: 'Engineering Updates',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  people: {
    id: 'people',
    name: 'People Team',
    role: 'Employee Experience',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  culture: {
    id: 'culture',
    name: 'Culture Committee',
    role: 'Events and Recognition',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
  },
};

export const newsCategories = [
  { id: 'strategy', title: 'Strategy', tone: 'blue' },
  { id: 'engineering', title: 'Engineering', tone: 'orange' },
  { id: 'people', title: 'People', tone: 'green' },
  { id: 'culture', title: 'Culture', tone: 'indigo' },
];

export const newsTags = ['Q3', 'Product', 'Benefits', 'Events', 'Security', 'Leadership'];

export const newsReactions = [
  { id: 'like', label: 'Like', icon: 'thumbs-up' },
  { id: 'celebrate', label: 'Celebrate', icon: 'award' },
  { id: 'insightful', label: 'Insightful', icon: 'zap' },
];

export const newsArticleDetails = {
  sustainability: {
    id: 'sustainability',
    sourceNewsIds: ['strategy-roadmap', 'marketing-alignment', 'q3-strategy-update', 'q4-expansion-tokyo'],
    title: 'Company-wide Sustainability Initiative',
    subtitle: 'BrightNow announces its most ambitious environmental roadmap to date.',
    categoryLabel: 'Sustainability',
    authorId: 'elena',
    publishedAt: '2024-10-24T09:30:00.000Z',
    publishedLabel: 'Oct 24, 2024',
    readMinutes: 6,
    heroImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90',
    bookmarked: false,
    liked: true,
    likes: '1.2k',
    commentCount: 84,
    tags: ['Sustainability', 'ESG', 'Operations'],
    sections: [
      {
        id: 'intro',
        type: 'paragraph',
        dropCap: 'A',
        body:
          "s we navigate the complexities of a changing global climate, BrightNow is proud to announce our most ambitious environmental roadmap to date. This initiative isn't just about reducing paper waste; it's a fundamental reimagining of our operational DNA.",
      },
      {
        id: 'carbon-neutral',
        type: 'section',
        heading: 'Our Carbon Neutral Promise',
        body:
          'By 2030, we aim to achieve net-zero carbon emissions across all global offices. This involves a multi-pronged approach starting with our energy procurement. We are currently transitioning 100% of our data centers to renewable geothermal and wind energy sources.',
      },
      {
        id: 'quote',
        type: 'quote',
        body:
          '"Sustainability is no longer an optional add-on; it is the cornerstone of how we build resilient business models for the next generation."',
      },
      {
        id: 'community',
        type: 'section',
        heading: 'Community Impact',
        body:
          "Beyond our own walls, we are launching the 'Green Equity Fund,' a internal grant program designed to support employee-led environmental projects in their local communities. Whether it's urban reforestation or local waste management solutions, we are providing the capital and the time for our people to make a tangible difference.",
      },
      {
        id: 'impact-list',
        type: 'checklist',
        items: [
          'Elimination of single-use plastics in all 42 campus cafeterias.',
          'Implementation of AI-driven smart lighting and climate control.',
          'New electric vehicle (EV) shuttle fleet for inter-campus transit.',
        ],
      },
    ],
    gallery: [
      {
        id: 'atrium',
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90',
        caption: 'Green workspace concept',
      },
    ],
    attachments: [
      { id: 'roadmap', title: 'ESG roadmap overview.pdf', type: 'pdf', size: '2.4 MB' },
      { id: 'metrics', title: 'Campus impact metrics.xlsx', type: 'sheet', size: '940 KB' },
    ],
    comments: ['Strong direction for our campus teams.', 'Can we get a regional rollout timeline?'],
  },
};

export const newsDetailAuthors = {
  elena: {
    id: 'elena',
    name: 'Elena Rodriguez',
    role: 'Director of ESG',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=90',
  },
};

export const relatedNewsArticles = [
  {
    id: 'hybrid-work-policy',
    title: 'New Hybrid Work Policy for Global Teams',
    categoryLabel: 'Policy Update',
    summary: 'Discover how we are building a more flexible, result-oriented culture...',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ai-ethics-board',
    title: 'AI Ethics Board: Our 2025 Vision',
    categoryLabel: 'Innovation',
    summary: 'Exploring the ethical boundaries of automated systems in enterprise...',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
  },
];

export const newsItems = [
  {
    id: 'q4-expansion-tokyo',
    type: 'announcement',
    title: 'Q4 Expansion: New Headquarters in Tokyo',
    summary: 'BrightNow is opening a regional headquarters to support Asia-Pacific client growth.',
    body:
      'Our Q4 expansion plan includes a new Tokyo headquarters, expanded customer success coverage, and a regional delivery team. The launch team will share relocation guidance, hiring updates, and partner onboarding milestones over the next two weeks.',
    categoryId: 'strategy',
    categoryLabel: 'Strategy',
    authorId: 'leadership',
    publishedAt: '2026-05-17T08:30:00.000Z',
    timeLabel: '1h ago',
    priority: 'High Priority',
    pinned: true,
    featured: true,
    trending: true,
    bookmarked: true,
    liked: false,
    likes: 42,
    read: false,
    mediaType: 'image',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
    tags: ['Q3', 'Leadership'],
    attachments: [{ id: 'brief', title: 'Expansion brief.pdf', type: 'pdf' }],
  },
  {
    id: 'q3-strategy-update',
    type: 'news',
    title: 'Q3 Strategy Update: Navigating the Hybrid Landscape',
    summary: 'Our leadership team outlines the roadmap for the upcoming quarter, with focus areas for growth and customer outcomes.',
    body:
      'The Q3 strategy refresh focuses on disciplined growth, hybrid delivery, and clearer customer success rituals. Leaders across Product, Sales, and Operations will host follow-up sessions by region so every team can map goals to delivery plans.',
    categoryId: 'strategy',
    categoryLabel: 'Strategy',
    authorId: 'leadership',
    publishedAt: '2026-05-17T07:00:00.000Z',
    timeLabel: '2h ago',
    priority: null,
    pinned: false,
    featured: true,
    trending: true,
    bookmarked: false,
    liked: true,
    likes: 88,
    read: false,
    mediaType: 'image',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85',
    tags: ['Q3', 'Leadership'],
    attachments: [],
  },
  {
    id: 'api-infrastructure-live',
    type: 'news',
    title: 'New API Infrastructure Now Live in Production',
    summary: "We've completed the migration to our next-gen services architecture with faster deployments and improved observability.",
    body:
      'The platform team has completed the production rollout for the new API gateway and service mesh. Teams should see lower latency, clearer incident telemetry, and faster rollback paths during release windows.',
    categoryId: 'engineering',
    categoryLabel: 'Engineering',
    authorId: 'engineering',
    publishedAt: '2026-05-17T04:00:00.000Z',
    timeLabel: '5h ago',
    priority: null,
    pinned: false,
    featured: false,
    trending: true,
    bookmarked: false,
    liked: false,
    likes: 64,
    read: true,
    mediaType: 'image',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    tags: ['Product', 'Security'],
    attachments: [{ id: 'runbook', title: 'Release runbook.md', type: 'document' }],
  },
  {
    id: 'benefit-enrollment',
    type: 'announcement',
    title: 'New Benefit Enrollment Starts Next Monday',
    summary: 'Open enrollment begins soon with updated healthcare plans and wellness reimbursements.',
    body:
      'People Operations will open benefit enrollment next Monday. Employees can compare plans, update dependents, and schedule one-on-one benefit consultations through the HR portal.',
    categoryId: 'people',
    categoryLabel: 'People',
    authorId: 'people',
    publishedAt: '2026-05-16T11:00:00.000Z',
    timeLabel: 'Yesterday',
    priority: 'Pinned',
    pinned: true,
    featured: false,
    trending: false,
    bookmarked: false,
    liked: false,
    likes: 35,
    read: false,
    mediaType: 'image',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85',
    tags: ['Benefits'],
    attachments: [{ id: 'benefits', title: 'Benefits guide.pdf', type: 'pdf' }],
  },
  {
    id: 'summer-mixer-recap',
    type: 'news',
    title: 'Recap: Annual Summer Mixer & Awards',
    summary: 'Relive the highlights from our rooftop celebration where we honored our top contributors.',
    body:
      'The Summer Mixer brought together teams from every office for awards, project showcases, and a customer impact gallery. Recognition highlights are now available for managers to share in team meetings.',
    categoryId: 'culture',
    categoryLabel: 'Culture',
    authorId: 'culture',
    publishedAt: '2026-05-16T09:00:00.000Z',
    timeLabel: 'Yesterday',
    priority: null,
    pinned: false,
    featured: false,
    trending: false,
    bookmarked: false,
    liked: false,
    likes: 27,
    read: true,
    mediaType: 'image',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
    tags: ['Events'],
    attachments: [{ id: 'gallery', title: 'Event gallery', type: 'image' }],
  },
];
