import { Feather } from '@expo/vector-icons';
import { Image, Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function EmployeeCard({ employee, onPress }) {
  return (
    <Pressable className="mb-[28px] overflow-hidden rounded-[9px] bg-white shadow-soft" onPress={() => onPress?.(employee)}>
      <View>
        <Image className="h-[214px] w-full" source={{ uri: employee.image }} />
        <View className="absolute right-[10px] top-[10px] h-[10px] w-[10px] rounded-full border-2 border-white bg-orgTeal" />
      </View>
      <View className="px-[28px] pb-[26px] pt-[22px]">
        <AppText className="text-[10px] font-bold uppercase leading-[12px] tracking-[1.6px] text-homeBlue">
          {employee.title}
        </AppText>
        <AppText className="mt-[10px] text-[20px] font-bold leading-[24px] text-charcoal">
          {employee.name}
        </AppText>
        <View className="mt-[6px] flex-row items-center">
          <Feather name="map-pin" size={11} color="#8A96A3" />
          <AppText className="ml-[5px] text-[12px] leading-[15px] text-muted">{employee.location}</AppText>
        </View>
        <AppText className="mt-[18px] text-[13px] leading-[19px] text-[#536070]">{employee.bio}</AppText>
        <View className="mt-[23px] h-[40px] items-center justify-center rounded-[8px] bg-action shadow-button">
          <AppText className="text-[12px] font-bold leading-[15px] text-ink">
            Message {employee.name.split(' ')[0]}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}
