import { Pressable, View } from 'react-native';

import { getConversationParticipant } from '../../utils/chat/chatSelectors';
import AppText from '../AppText';
import Avatar from './Avatar';

export default function ChatCard({ conversation, users, highlighted, onPress }) {
  const participant = getConversationParticipant(conversation, users);

  return (
    <Pressable
      className={`flex-row rounded-searchCard px-[16px] py-[18px] ${highlighted ? 'bg-white' : 'bg-transparent'}`}
      onPress={() => onPress?.(conversation)}
    >
      <Avatar user={participant} showStatus={highlighted} />
      <View className="ml-[16px] flex-1">
        <View className="flex-row items-center justify-between">
          <AppText className="text-[16px] font-semibold leading-[20px] text-charcoal">
            {conversation.title}
          </AppText>
          <AppText className="text-[11px] font-medium uppercase leading-[14px] tracking-[0.7px] text-muted">
            {conversation.lastMessageAt}
          </AppText>
        </View>
        <AppText
          className={`mt-[6px] text-[15px] leading-[21px] ${
            highlighted ? 'font-semibold text-charcoal' : 'text-muted'
          }`}
          numberOfLines={2}
        >
          {conversation.lastMessage}
        </AppText>
      </View>
    </Pressable>
  );
}
