import { useMemo, useState } from 'react';

import { chatActions, useChatStore } from '../../store/chat/chatStore';
import { getConversationParticipant, groupMessagesBySender } from '../../utils/chat/chatSelectors';

export function useConversation(conversationId) {
  const chat = useChatStore();
  const conversation = chat.conversations.find((item) => item.id === conversationId) || chat.conversations[0];
  const messages = chat.messagesByConversation[conversation.id] || [];
  const [draft, setDraft] = useState('');
  const participant = getConversationParticipant(conversation, chat.users);

  const groupedMessages = useMemo(() => groupMessagesBySender(messages), [messages]);

  const sendMessage = async () => {
    const text = draft.trim();

    if (!text) {
      return;
    }

    setDraft('');
    chatActions.sendMessage(conversation.id, text);
  };

  return {
    conversation,
    participant,
    users: chat.users,
    messages: groupedMessages,
    draft,
    setDraft,
    sendMessage,
    typingUserIds: chat.typingByConversation[conversation.id] ? [participant?.id].filter(Boolean) : [],
    isTyping: Boolean(chat.typingByConversation[conversation.id]),
    markRead: () => chatActions.markRead(conversation.id),
    toggleReaction: (messageId) => chatActions.toggleReaction(conversation.id, messageId),
  };
}
