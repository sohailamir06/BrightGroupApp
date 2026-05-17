import { Pressable, View } from 'react-native';

import { homeLabels } from '../../constants/homeLabels';
import AppText from '../AppText';

export function Section({ title, actionLabel = homeLabels.viewAll, onActionPress, children, className }) {
  return (
    <View className={className}>
      <View className="mb-[26px] flex-row items-center justify-between">
        <AppText className="text-[21px] font-bold leading-[26px] text-charcoal">
          {title}
        </AppText>
        {actionLabel ? (
          <Pressable className="px-[2px] py-[2px]" onPress={onActionPress}>
            <AppText className="text-[14px] font-bold leading-[18px] text-homeBlue">
              {actionLabel}
            </AppText>
          </Pressable>
        ) : null}
      </View>
      {children}
    </View>
  );
}

export function EmptyState({ title = homeLabels.emptyTitle, body = homeLabels.emptyBody }) {
  return (
    <View className="rounded-homeCard bg-homeCard px-[20px] py-[22px]">
      <AppText className="text-[16px] font-bold text-charcoal">{title}</AppText>
      <AppText className="mt-[6px] text-[14px] leading-[20px] text-muted">{body}</AppText>
    </View>
  );
}
