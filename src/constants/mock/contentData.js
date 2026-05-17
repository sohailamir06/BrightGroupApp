export const contentAuthors = {
  sarah: {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'Marketing Lead',
  },
  ops: {
    id: 'ops',
    name: 'Operations Team',
    role: 'Internal Operations',
  },
  brand: {
    id: 'brand',
    name: 'Brand Studio',
    role: 'Creative Services',
  },
};

export const contentCategories = [
  {
    id: 'policies',
    title: 'Company Policies',
    countLabel: '24 documents',
    icon: 'shield',
    tone: 'blue',
  },
  {
    id: 'brand',
    title: 'Brand Guidelines',
    countLabel: '12 assets',
    icon: 'aperture',
    tone: 'orange',
  },
  {
    id: 'hr',
    title: 'HR Forms',
    countLabel: '8 forms',
    icon: 'file-text',
    tone: 'indigo',
  },
  {
    id: 'training',
    title: 'Training Manuals',
    countLabel: '15 guides',
    icon: 'book-open',
    tone: 'cyan',
  },
];

export const contentTags = ['Marketing', 'Operations', 'Branding', 'Policies', 'Training'];

export const contentPosts = [
  {
    id: 'q3-playbook',
    title: 'Q3 Strategy Playbook.pdf',
    categoryId: 'brand',
    categoryLabel: 'Marketing',
    authorId: 'sarah',
    viewedAt: 'Viewed 2 hours ago',
    size: '4.2 MB',
    type: 'document',
    mediaType: 'pdf',
    bookmarked: true,
    liked: false,
    likes: 18,
    recommended: true,
    trending: true,
    excerpt: 'Campaign strategy, audience segmentation, launch calendar, and core positioning for Q3.',
  },
  {
    id: 'remote-work-protocol',
    title: 'Remote Work Protocol v2.1',
    categoryId: 'policies',
    categoryLabel: 'Operations',
    authorId: 'ops',
    viewedAt: 'Viewed Yesterday',
    size: '1.5 MB',
    type: 'policy',
    mediaType: 'document',
    bookmarked: false,
    liked: false,
    likes: 32,
    recommended: true,
    trending: false,
    excerpt: 'Updated expectations for hybrid work, collaboration windows, and office scheduling.',
  },
  {
    id: 'identity-masterfile',
    title: 'Corporate Identity Masterfile',
    categoryId: 'brand',
    categoryLabel: 'Branding',
    authorId: 'brand',
    viewedAt: 'Viewed 3 days ago',
    size: '18.9 MB',
    type: 'asset',
    mediaType: 'image',
    bookmarked: false,
    liked: true,
    likes: 44,
    recommended: false,
    trending: true,
    excerpt: 'Logo rules, color systems, typography guidance, and master brand artwork package.',
  },
];
