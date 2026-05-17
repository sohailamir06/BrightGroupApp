import { Feather } from '@expo/vector-icons';
import { Image, Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function NewsCard({ item, className, onPress }) {
  return (
    <Pressable className={`min-h-[208px] flex-row rounded-homeCard bg-homeCard px-[24px] py-[24px] ${className || ''}`} onPress={() => onPress?.(item)}>
      <Image className="mt-[1px] h-[96px] w-[96px] rounded-[7px]" source={{ uri: item.image }} />

      <View className="ml-[24px] flex-1">
        <View className="mb-[10px] flex-row items-center">
          <View className="rounded-[4px] bg-[#DCE6F8] px-[7px] py-[3px]">
            <AppText className="text-[10px] font-bold uppercase leading-[12px] text-homeBlue">
              {item.category}
            </AppText>
          </View>
          <AppText className="ml-[8px] text-[12px] leading-[15px] text-silver">
            {item.date}
          </AppText>
        </View>

        <AppText className="text-[18px] font-bold leading-[27px] text-charcoal">
          {item.titlePrefix}
          {'\n'}
          <AppText className="font-bold text-silver">{item.titleMuted} </AppText>
          <AppText className="bg-[#EDF2FF] font-bold text-homeBlue">{item.highlight}</AppText>
          {item.titleSuffix ? (
            <AppText className="font-bold text-charcoal"> {item.titleSuffix}</AppText>
          ) : null}
        </AppText>

        <AppText className="mt-[4px] text-[15px] leading-[22px] text-muted" numberOfLines={2}>
          {item.excerpt}
        </AppText>

        <View className="mt-[12px] flex-row items-center self-start">
          <AppText className="text-[13px] font-bold leading-[16px] text-homeBlue">Read more</AppText>
          <Feather name="arrow-right" size={14} color="#0B5CD7" />
        </View>
      </View>
    </Pressable>
  );
}
