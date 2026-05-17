import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

const resultIcons = {
  document: 'file-text',
  policy: 'shield',
  person: 'user',
  news: 'calendar',
};

export default function SearchResultCard({ item }) {
  return (
    <Pressable className="mb-[14px] flex-row rounded-searchCard bg-white px-[18px] py-[18px]">
      <View className="h-[42px] w-[42px] items-center justify-center rounded-[8px] bg-[#EDF3FF]">
        <Feather name={resultIcons[item.type] || 'search'} size={21} color="#0B5CD7" />
      </View>
      <View className="ml-[14px] flex-1">
        <AppText className="text-[16px] font-bold leading-[20px] text-charcoal">{item.title}</AppText>
        <AppText className="mt-[4px] text-[13px] leading-[18px] text-muted" numberOfLines={2}>
          {item.description}
        </AppText>
        <AppText className="mt-[8px] text-[10px] font-bold uppercase leading-[12px] tracking-[1px] text-homeBlue">
          {item.meta}
        </AppText>
      </View>
    </Pressable>
  );
}
