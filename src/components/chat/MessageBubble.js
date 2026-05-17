import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { currentUserId } from '../../constants/mock/chatData';
import AppText from '../AppText';

export default function MessageBubble({ message }) {
  const mine = message.senderId === currentUserId;

  return (
    <View className={`mb-[24px] ${mine ? 'items-end' : 'items-start'}`}>
      <View
        className={`max-w-[80%] rounded-[14px] px-[16px] py-[17px] ${
          mine ? 'rounded-br-[3px] bg-action' : 'rounded-bl-[3px] bg-white'
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
        <AppText className={`text-[17px] leading-[28px] ${mine ? 'text-ink' : 'text-charcoal'}`}>
          {message.text}
        </AppText>
      </View>
      <View className="mt-[8px] flex-row items-center">
        <AppText className="text-[11px] leading-[14px] text-silver">{message.createdAt}</AppText>
        {mine ? (
          <View className="ml-[5px]">
            <Feather name="check" size={11} color="#0B5CD7" />
          </View>
        ) : null}
      </View>
    </View>
  );
}
