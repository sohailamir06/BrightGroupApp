import { useMemo, useState } from 'react';

import { useChatStore } from '../../store/chat/chatStore';
import { filterConversations } from '../../utils/chat/chatSelectors';

export function useChatList() {
  const [query, setQuery] = useState('');
  const [isLoading] = useState(false);
  const chat = useChatStore();

  const conversations = useMemo(
    () => filterConversations(chat.conversations, chat.users, query),
    [chat.conversations, chat.users, query],
  );

  return {
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    conversations,
    users: chat.users,
    isLoading,
    isEmpty: !isLoading && conversations.length === 0,
  };
}
