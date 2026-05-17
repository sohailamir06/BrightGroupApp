import { Image, View } from 'react-native';

import AppText from '../../AppText';

export default function AuthorCard({ author, meta }) {
  return (
    <View className="mt-[40px] flex-row items-center">
      <Image className="h-[49px] w-[49px] rounded-full" source={{ uri: author?.avatar }} />
      <View className="ml-[13px] flex-1">
        <AppText className="text-[14px] font-bold leading-[18px] text-[#1F2329]">{author?.name}</AppText>
        <AppText className="mt-[2px] text-[13px] leading-[18px] text-[#4C5665]">
          {author?.role} {'\u00b7'} {meta}
        </AppText>
      </View>
    </View>
  );
}
