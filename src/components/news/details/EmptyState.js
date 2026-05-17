import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../../AppText';

export default function EmptyState({ title = 'Article unavailable', body = 'This announcement could not be loaded.' }) {
  return (
    <View className="mx-[24px] mt-[32px] items-center rounded-[10px] bg-white px-[24px] py-[34px]">
      <Feather name="alert-circle" size={28} color="#0B5CD7" />
      <AppText className="mt-[12px] text-[17px] font-bold leading-[22px] text-charcoal">{title}</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">{body}</AppText>
    </View>
  );
}
