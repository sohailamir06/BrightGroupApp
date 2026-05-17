import { Image, ScrollView, View } from 'react-native';

import AppText from '../../AppText';

export default function MediaGallery({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <View className="mt-[24px]">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View className="mr-[12px] w-[168px]" key={item.id}>
            <Image className="h-[96px] w-full rounded-[10px]" source={{ uri: item.image }} />
            <AppText className="mt-[7px] text-[12px] leading-[16px] text-muted">{item.caption}</AppText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
