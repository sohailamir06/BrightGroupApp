import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { currentUserId } from '../../constants/mock/chatData';
import AppText from '../AppText';

export default function MessageBubble({ message }) {
  const mine = message.senderId === currentUserId;

  return (
    <View className={`mb-[8px] ${mine ? 'items-end' : 'items-start'}`}>
      <View
        className={`max-w-[78%] rounded-[18px] px-[16px] py-[11px] ${
          mine ? 'rounded-br-[5px] bg-homeBlue' : 'rounded-bl-[5px] bg-white'
        }`}
      >
        {message.type === 'attachment' ? (
          <View className="mb-[7px] flex-row items-center">
            <Feather name="paperclip" size={15} color={mine ? '#FFFFFF' : '#0B5CD7'} />
            <AppText className={`ml-[6px] text-[13px] font-bold ${mine ? 'text-white' : 'text-homeBlue'}`}>
              {message.attachmentName}
            </AppText>
          </View>
        ) : null}
        <AppText className={`text-[15px] leading-[21px] ${mine ? 'text-white' : 'text-charcoal'}`}>
          {message.text}
        </AppText>
      </View>
      <AppText className="mt-[4px] text-[10px] uppercase leading-[12px] text-silver">
        {message.createdAt} {mine ? `· ${message.status}` : ''}
      </AppText>
    </View>
  );
}
