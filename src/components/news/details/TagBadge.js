import { View } from 'react-native';

import AppText from '../../AppText';

export default function TagBadge({ label }) {
  return (
    <View className="self-start rounded-full bg-[#BFD1FF] px-[13px] py-[6px]">
      <AppText className="text-[10px] font-bold uppercase leading-[12px] text-[#315080]">{label}</AppText>
    </View>
  );
}
