import { useMemo, useState } from 'react';

import { chatConversations, chatMessages, chatUsers, currentUserId } from '../../constants/mock/chatData';
import { sendLocalMessage } from '../../services/chat/chatService';
import { getConversationParticipant, groupMessagesBySender } from '../../utils/chat/chatSelectors';

export function useConversation(conversationId) {
  const conversation = chatConversations.find((item) => item.id === conversationId) || chatConversations[0];
  const [messages, setMessages] = useState(chatMessages[conversation.id] || []);
  const [draft, setDraft] = useState('');
  const [typingUserIds] = useState(conversation.typingUserIds || []);
  const participant = getConversationParticipant(conversation, chatUsers);

  const groupedMessages = useMemo(() => groupMessagesBySender(messages), [messages]);

  const sendMessage = async () => {
    const text = draft.trim();

    if (!text) {
      return;
    }

    const optimisticMessage = {
      id: `local-${Date.now()}`,
      conversationId: conversation.id,
      senderId: currentUserId,
      type: 'text',
      text,
      createdAt: 'Now',
      status: 'sending',
    };

    setDraft('');
    setMessages((current) => [...current, optimisticMessage]);

    const confirmed = await sendLocalMessage({
      conversationId: conversation.id,
      message: optimisticMessage,
    });

    setMessages((current) =>
      current.map((message) => (message.id === optimisticMessage.id ? confirmed : message)),
    );
  };

  return {
    conversation,
    participant,
    users: chatUsers,
    messages: groupedMessages,
    draft,
    setDraft,
    sendMessage,
    typingUserIds,
    isTyping: typingUserIds.length > 0,
  };
}
