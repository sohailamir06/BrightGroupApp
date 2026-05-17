import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function EmptyState() {
  return (
    <View className="items-center rounded-[12px] bg-white px-[24px] py-[30px]">
      <Feather name="users" size={28} color="#0B5CD7" />
      <AppText className="mt-[12px] text-[18px] font-bold text-charcoal">No talent found</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">
        Try another department, role, or skill keyword.
      </AppText>
    </View>
  );
}
