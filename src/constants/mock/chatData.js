export const currentUserId = 'me';

export const chatUsers = {
  me: {
    id: 'me',
    name: 'You',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    online: true,
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah Jenkins',
    avatar:
      'https://images.unsplash.com/photo- blonde woman portrait office professional',
    fallbackAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    online: true,
  },
  david: {
    id: 'david',
    name: 'David Chen',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
    online: false,
  },
  elena: {
    id: 'elena',
    name: 'Elena Rodriguez',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80',
    online: false,
  },
  marcus: {
    id: 'marcus',
    name: 'Marcus Thorne',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    online: false,
  },
};

export const chatConversations = [
  {
    id: 'conv-sarah',
    participantIds: ['me', 'sarah'],
    title: 'Sarah Jenkins',
    lastMessage: 'Did you see the final draft of the design strategy?',
    lastMessageAt: '10:42 AM',
    unreadCount: 1,
    read: false,
    typingUserIds: [],
  },
  {
    id: 'conv-david',
    participantIds: ['me', 'david'],
    title: 'David Chen',
    lastMessage: 'The server migration is successfully completed.',
    lastMessageAt: 'YESTERDAY',
    unreadCount: 0,
    read: true,
    typingUserIds: [],
  },
  {
    id: 'conv-elena',
    participantIds: ['me', 'elena'],
    title: 'Elena Rodriguez',
    lastMessage: "Let's connect later today about the board meeting notes.",
    lastMessageAt: 'TUE',
    unreadCount: 0,
    read: true,
    typingUserIds: [],
  },
  {
    id: 'conv-marcus',
    participantIds: ['me', 'marcus'],
    title: 'Marcus Thorne',
    lastMessage: 'Attached the moodboard for the new campaign.',
    lastMessageAt: 'MON',
    unreadCount: 0,
    read: true,
    typingUserIds: [],
  },
];

export const chatMessages = {
  'conv-sarah': [
    {
      id: 'msg-1',
      conversationId: 'conv-sarah',
      senderId: 'sarah',
      type: 'text',
      text: "Hey! I've finished the initial review of the Q3 project proposal. Do you have a moment to discuss the resource allocation for the design phase?",
      createdAt: '10:42 AM',
      status: 'read',
    },
    {
      id: 'msg-2',
      conversationId: 'conv-sarah',
      senderId: 'me',
      type: 'text',
      text: "That's great news, Sarah. I'm just finishing up a call. Would 2:00 PM work for a quick sync? I want to make sure we're aligned on the editorial direction.",
      createdAt: '10:45 AM',
      status: 'read',
    },
    {
      id: 'msg-3',
      conversationId: 'conv-sarah',
      senderId: 'sarah',
      type: 'text',
      text: "2:00 PM sounds perfect. I'll send over the updated deck so you can have a quick look before we meet.",
      createdAt: '10:46 AM',
      status: 'read',
    },
    {
      id: 'msg-4',
      conversationId: 'conv-sarah',
      senderId: 'me',
      type: 'text',
      text: 'Perfect. Looking forward to it!',
      createdAt: '10:47 AM',
      status: 'read',
    },
  ],
  'conv-david': [
    {
      id: 'msg-4',
      conversationId: 'conv-david',
      senderId: 'david',
      type: 'text',
      text: 'The server migration is successfully completed.',
      createdAt: 'Yesterday',
      status: 'read',
    },
  ],
  'conv-elena': [
    {
      id: 'msg-5',
      conversationId: 'conv-elena',
      senderId: 'elena',
      type: 'text',
      text: "Let's connect later today about the board meeting notes.",
      createdAt: 'Tue',
      status: 'read',
    },
  ],
  'conv-marcus': [
    {
      id: 'msg-6',
      conversationId: 'conv-marcus',
      senderId: 'marcus',
      type: 'attachment',
      text: 'Attached the moodboard for the new campaign.',
      attachmentName: 'Campaign_Moodboard.pdf',
      createdAt: 'Mon',
      status: 'read',
    },
  ],
};
