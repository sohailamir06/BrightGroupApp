import { Image, Pressable, View } from 'react-native';

import AppText from '../../AppText';

export default function RelatedNewsCard({ article, onPress }) {
  return (
    <Pressable className="mb-[24px] overflow-hidden rounded-[10px] bg-white" onPress={() => onPress?.(article)}>
      <Image className="h-[149px] w-full" source={{ uri: article.image }} />
      <View className="px-[24px] pb-[23px] pt-[25px]">
        <AppText className="text-[11px] font-bold uppercase leading-[14px] text-homeBlue">{article.categoryLabel}</AppText>
        <AppText className="mt-[15px] text-[19px] font-bold leading-[26px] text-[#20242A]">{article.title}</AppText>
        <AppText className="mt-[13px] text-[15px] leading-[21px] text-[#4C5665]" numberOfLines={2}>
          {article.summary}
        </AppText>
      </View>
    </Pressable>
  );
}
