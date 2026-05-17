import { View } from 'react-native';

import AppText from '../AppText';

export default function NotificationBadge({ count }) {
  if (!count) {
    return null;
  }

  return (
    <View className="min-w-[18px] items-center justify-center rounded-full bg-homeBlue px-[5px] py-[2px]">
      <AppText className="text-[10px] font-bold leading-[12px] text-white">{count}</AppText>
    </View>
  );
}
