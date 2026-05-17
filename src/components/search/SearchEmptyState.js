import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function SearchEmptyState({ title = 'Start searching', body = 'Search across people, news, policies, and shared documents.' }) {
  return (
    <View className="items-center rounded-searchCard bg-white px-[24px] py-[30px]">
      <View className="h-[48px] w-[48px] items-center justify-center rounded-full bg-[#EDF3FF]">
        <Feather name="search" size={23} color="#0B5CD7" />
      </View>
      <AppText className="mt-[14px] text-[18px] font-bold leading-[23px] text-charcoal">{title}</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">{body}</AppText>
    </View>
  );
}
