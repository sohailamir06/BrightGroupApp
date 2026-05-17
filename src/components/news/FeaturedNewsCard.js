import { ImageBackground, Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function FeaturedNewsCard({ item, onPress }) {
  return (
    <Pressable className="mr-[16px] h-[224px] w-[332px] overflow-hidden rounded-[18px] bg-[#20333C]" onPress={() => onPress?.(item)}>
      <ImageBackground className="h-full w-full justify-end" imageClassName="rounded-[18px]" source={{ uri: item.image }}>
        <View className="h-full justify-end bg-[#00000038] px-[24px] pb-[24px]">
          {item.priority ? (
            <View className="mb-[9px] self-start rounded-full bg-[#E85D04] px-[13px] py-[6px]">
              <AppText className="text-[10px] font-bold uppercase leading-[12px] text-white">{item.priority}</AppText>
            </View>
          ) : null}
          <AppText className="text-[18px] font-bold leading-[22px] text-white" numberOfLines={2}>
            {item.title}
          </AppText>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
