import { View } from 'react-native';

import AppText from './AppText';

export default function BrandHeader() {
  return (
    <View className="h-[58px] items-center justify-center rounded-brand bg-surface">
      <AppText className="text-[20px] font-bold uppercase leading-[24px] tracking-[2.3px] text-[#45474B]">
        BRIGHT DIGITAL
      </AppText>
      <View className="mt-[7px] flex-row items-center">
        <View className="h-[6px] w-[116px] bg-accent" />
        <AppText className="ml-[5px] text-[10px] uppercase leading-[10px] tracking-[3px] text-[#32343A]">
          AUSTRIA
        </AppText>
      </View>
    </View>
  );
}
