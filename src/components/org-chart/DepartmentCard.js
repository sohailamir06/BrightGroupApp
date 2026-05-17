import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function DepartmentCard({ department, count, onPress }) {
  return (
    <Pressable className="mb-[12px] flex-row items-center rounded-[10px] bg-white px-[16px] py-[14px]" onPress={onPress}>
      <View className="h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E8F0FF]">
        <Feather name="users" size={18} color="#0B5CD7" />
      </View>
      <View className="ml-[12px] flex-1">
        <AppText className="text-[15px] font-bold text-charcoal">{department.label}</AppText>
        <AppText className="mt-[2px] text-[12px] text-muted">{count} members</AppText>
      </View>
    </Pressable>
  );
}
