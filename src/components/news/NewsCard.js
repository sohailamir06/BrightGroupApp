import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import MediaPreview from './MediaPreview';

const categoryText = {
  Strategy: 'text-homeBlue',
  Engineering: 'text-[#E85D04]',
  People: 'text-[#168A5B]',
  Culture: 'text-[#315AA8]',
};

export default function NewsCard({ item, onPress, onBookmark, onLike, onToggleRead }) {
  const reactionDots =
    item.categoryLabel === 'Strategy'
      ? ['bg-[#E5EBF2]', 'bg-[#D6DEE8]', 'bg-[#9AAABE]']
      : item.categoryLabel === 'Engineering'
        ? ['bg-[#B9DCFF]', 'bg-[#83BFFF]']
        : ['bg-[#DCEBFF]'];

  return (
    <Pressable className="mb-[31px] overflow-hidden rounded-[14px] bg-white" onPress={() => onPress?.(item)}>
      <MediaPreview item={item} large roundedTop />
      <View className="px-[20px] pb-[20px] pt-[18px]">
        <View className="flex-row items-center">
          <AppText className={`${categoryText[item.categoryLabel] || 'text-homeBlue'} text-[15px] font-normal leading-[19px]`}>
            {item.categoryLabel}
          </AppText>
          <AppText className="mx-[8px] text-[15px] leading-[19px] text-[#C6CDD7]">{'\u2022'}</AppText>
          <AppText className="text-[15px] font-normal leading-[19px] text-[#4C5665]">{item.timeLabel}</AppText>
        </View>

        <AppText className="mt-[15px] text-[16px] font-bold leading-[21px] text-[#1F2329]" numberOfLines={2}>
          {item.title}
        </AppText>
        <AppText className="mt-[13px] text-[16px] leading-[24px] text-[#4C5665]" numberOfLines={2}>
          {item.summary}
        </AppText>

        <View className="mt-[18px] flex-row items-center justify-between">
          <View className="flex-row items-center">
            {reactionDots.map((color, index) => (
              <Pressable
                className={`${color} ${index > 0 ? 'ml-[-4px]' : ''} h-[20px] w-[20px] rounded-full border border-white`}
                key={`${item.id}-${color}`}
                onPress={() => (index === 0 ? onBookmark?.(item.id) : onLike?.(item.id))}
              />
            ))}
          </View>
          <Pressable className="flex-row items-center" onPress={() => onPress?.(item)}>
            <AppText className="text-[13px] font-bold leading-[16px] text-homeBlue">Read more</AppText>
            <View className="ml-[3px]">
              <Feather name="arrow-right" size={15} color="#0B5CD7" />
            </View>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
