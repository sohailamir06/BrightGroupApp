import { chatConversations, chatMessages, chatUsers, currentUserId } from '../../constants/mock/chatData';
import { createStore } from '../createStore';

const initialState = {
  users: chatUsers,
  conversations: chatConversations,
  messagesByConversation: chatMessages,
  typingByConversation: {},
  activeFilter: 'all',
};

function nowLabel() {
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date());
}

export const chatStore = createStore(initialState, (setState, getState) => ({
  markRead: (conversationId) =>
    setState({
      conversations: getState().conversations.map((conversation) =>
        conversation.id === conversationId ? { ...conversation, unreadCount: 0, read: true } : conversation,
      ),
    }),
  setFilter: (activeFilter) => setState({ activeFilter }),
  sendMessage: (conversationId, text) => {
    const message = {
      id: `local-${Date.now()}`,
      conversationId,
      senderId: currentUserId,
      type: 'text',
      text,
      createdAt: nowLabel(),
      status: 'read',
      reactions: [],
    };
    const currentMessages = getState().messagesByConversation[conversationId] || [];

    setState({
      messagesByConversation: {
        ...getState().messagesByConversation,
        [conversationId]: [...currentMessages, message],
      },
      conversations: getState().conversations.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, lastMessage: text, lastMessageAt: 'NOW', unreadCount: 0, read: true }
          : conversation,
      ),
      typingByConversation: { ...getState().typingByConversation, [conversationId]: true },
    });

    setTimeout(() => {
      const reply = {
        id: `reply-${Date.now()}`,
        conversationId,
        senderId: getState().conversations.find((item) => item.id === conversationId)?.participantIds.find((id) => id !== currentUserId),
        type: 'text',
        text: 'Got it. I will review and follow up shortly.',
        createdAt: nowLabel(),
        status: 'read',
        reactions: [],
      };

      setState({
        messagesByConversation: {
          ...getState().messagesByConversation,
          [conversationId]: [...(getState().messagesByConversation[conversationId] || []), reply],
        },
        conversations: getState().conversations.map((conversation) =>
          conversation.id === conversationId
            ? { ...conversation, lastMessage: reply.text, lastMessageAt: 'NOW', unreadCount: 1, read: false }
            : conversation,
        ),
        typingByConversation: { ...getState().typingByConversation, [conversationId]: false },
      });
    }, 900);
  },
  toggleReaction: (conversationId, messageId) =>
    setState({
      messagesByConversation: {
        ...getState().messagesByConversation,
        [conversationId]: (getState().messagesByConversation[conversationId] || []).map((message) =>
          message.id === messageId
            ? { ...message, reactions: message.reactions?.length ? [] : ['thumbs-up'] }
            : message,
        ),
      },
    }),
}));

export const useChatStore = chatStore.useStore;
export const chatActions = chatStore.actions;
