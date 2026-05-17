import { ROUTES } from '../routes';

export const sidebarProfile = {
  id: 'alex-rivera',
  name: 'Alex Rivera',
  role: 'The Digital Curator',
  status: 'Active Status',
  avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
};

export const sidebarWorkspaces = [
  {
    id: 'bright-digital',
    name: 'Bright Digital',
    plan: 'Enterprise Workspace',
    active: true,
  },
  {
    id: 'austria-office',
    name: 'Austria Office',
    plan: 'Regional Workspace',
    active: false,
  },
];

export const sidebarPermissions = {
  role: 'curator',
  allowedRoutes: [
    ROUTES.HOME,
    ROUTES.SEARCH,
    ROUTES.CHAT_LIST,
    ROUTES.CONTENT_FEED,
    ROUTES.ORG_CHART,
  ],
};

export const sidebarMenu = [
  {
    id: 'main',
    title: 'Workspace',
    collapsible: true,
    defaultExpanded: false,
    items: [
      { id: 'home', label: 'Home', icon: 'home', route: ROUTES.HOME },
      { id: 'search', label: 'Search', icon: 'search', route: ROUTES.SEARCH },
      { id: 'chat', label: 'Chat', icon: 'message-square', route: ROUTES.CHAT_LIST, badge: 2 },
      { id: 'content', label: 'Content', icon: 'file-text', route: ROUTES.CONTENT_FEED },
      { id: 'org', label: 'ORG CHART', icon: 'grid', route: ROUTES.ORG_CHART },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    collapsible: false,
    items: [
      { id: 'share-price', label: 'Share Price', icon: 'trending-up' },
      { id: 'faq', label: 'FAQ', icon: 'help-circle', badge: 1 },
      { id: 'meal-plan', label: 'Meal Plan', icon: 'coffee' },
      { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 4 },
      { id: 'settings', label: 'Settings', icon: 'settings', active: true },
    ],
  },
];
