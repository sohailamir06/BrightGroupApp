import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function EmptyState({ title = 'No announcements yet', body = 'New updates will appear here as they are published.' }) {
  return (
    <View className="items-center rounded-[14px] bg-white px-[24px] py-[34px]">
      <View className="h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E8F0FF]">
        <Feather name="inbox" size={22} color="#0B5CD7" />
      </View>
      <AppText className="mt-[14px] text-center text-[17px] font-bold leading-[22px] text-charcoal">{title}</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">{body}</AppText>
    </View>
  );
}
