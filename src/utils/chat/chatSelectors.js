import { currentUserId } from '../../constants/mock/chatData';

export function getConversationParticipant(conversation, users) {
  const participantId = conversation.participantIds.find((id) => id !== currentUserId);
  return users[participantId];
}

export function filterConversations(conversations, users, query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    return conversations;
  }

  return conversations.filter((conversation) => {
    const participant = getConversationParticipant(conversation, users);
    const searchable = `${conversation.title} ${participant?.name || ''} ${conversation.lastMessage}`.toLowerCase();
    return searchable.includes(term);
  });
}

export function groupMessagesBySender(messages) {
  return messages.map((message, index) => {
    const previous = messages[index - 1];
    const next = messages[index + 1];

    return {
      ...message,
      startsGroup: !previous || previous.senderId !== message.senderId,
      endsGroup: !next || next.senderId !== message.senderId,
    };
  });
}
