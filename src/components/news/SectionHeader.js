import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function SectionHeader({ title, subtitle, actionLabel, onActionPress }) {
  return (
    <View className="mb-[16px] flex-row items-end justify-between">
      <View className="flex-1 pr-[16px]">
        <AppText className="text-[17px] font-bold leading-[22px] text-[#20242A]">{title}</AppText>
        {subtitle ? <AppText className="mt-[3px] text-[12px] leading-[16px] text-muted">{subtitle}</AppText> : null}
      </View>
      {actionLabel ? (
        <Pressable className="py-[3px]" onPress={onActionPress}>
          <AppText className="text-[14px] font-bold leading-[18px] text-homeBlue">{actionLabel}</AppText>
        </Pressable>
      ) : null}
    </View>
  );
}
