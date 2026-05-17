import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function QuickActionCard({ action }) {
  return (
    <View className="rounded-homePanel bg-action px-[24px] pb-[25px] pt-[48px] shadow-soft">
      <AppText className="text-[10px] font-bold uppercase leading-[12px] tracking-[1.5px] text-homeBlue">
        {action.eyebrow}
      </AppText>
      <AppText className="mt-[13px] text-[25px] font-bold leading-[31px] text-homeBlue">
        {action.title}
      </AppText>
      <AppText className="mt-[18px] text-[14px] leading-[22px] text-homeBlue">
        {action.body}
      </AppText>
      <Pressable className="mt-[28px] h-[43px] items-center justify-center rounded-[7px] bg-white">
        <AppText className="text-[14px] font-bold leading-[18px] text-homeBlue">
          {action.buttonLabel}
        </AppText>
      </Pressable>
    </View>
  );
}
