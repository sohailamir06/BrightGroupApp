import { View } from 'react-native';

import AppText from '../AppText';

export default function SectionHeader({ title, subtitle, actionLabel }) {
  return (
    <View className="mb-[27px] flex-row items-end justify-between">
      <View>
        <AppText className="text-[16px] font-bold leading-[20px] text-charcoal">{title}</AppText>
        {subtitle ? (
          <AppText className="mt-[8px] text-[16px] leading-[20px] text-muted">{subtitle}</AppText>
        ) : null}
      </View>
      {actionLabel ? (
        <AppText className="text-[16px] font-bold leading-[20px] text-homeBlue">{actionLabel}</AppText>
      ) : null}
    </View>
  );
}
