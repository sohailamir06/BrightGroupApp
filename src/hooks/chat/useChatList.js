import { useMemo, useState } from 'react';

import { chatConversations, chatUsers } from '../../constants/mock/chatData';
import { filterConversations } from '../../utils/chat/chatSelectors';

export function useChatList() {
  const [query, setQuery] = useState('');
  const [isLoading] = useState(false);

  const conversations = useMemo(
    () => filterConversations(chatConversations, chatUsers, query),
    [query],
  );

  return {
    query,
    setQuery,
    clearQuery: () => setQuery(''),
    conversations,
    users: chatUsers,
    isLoading,
    isEmpty: !isLoading && conversations.length === 0,
  };
}
