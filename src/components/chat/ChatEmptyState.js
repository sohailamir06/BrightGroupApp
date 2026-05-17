import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function ChatEmptyState() {
  return (
    <View className="items-center rounded-searchCard bg-white px-[24px] py-[32px]">
      <Feather name="message-square" size={28} color="#0B5CD7" />
      <AppText className="mt-[14px] text-[18px] font-bold text-charcoal">No conversations found</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">
        Try a different name or message keyword.
      </AppText>
    </View>
  );
}
