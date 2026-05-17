import { chatConversations, chatMessages, chatUsers } from '../../constants/mock/chatData';

export async function getChatBootstrap() {
  return {
    users: chatUsers,
    conversations: chatConversations,
    messages: chatMessages,
  };
}

export async function sendLocalMessage({ conversationId, message }) {
  return {
    ...message,
    conversationId,
    status: 'sent',
  };
}
