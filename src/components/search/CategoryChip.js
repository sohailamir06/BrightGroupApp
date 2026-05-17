import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function CategoryChip({ item, onPress }) {
  return (
    <Pressable className="mb-[16px] h-[160px] w-[47.6%] rounded-searchCard bg-white px-[24px] pt-[25px]" onPress={() => onPress?.(item)}>
      <Feather name={item.icon} size={27} color="#0B5CD7" />
      <View className="mt-[25px]">
        <AppText className="text-[22px] font-bold leading-[26px] text-charcoal">{item.title}</AppText>
        <AppText className="mt-[3px] text-[15px] leading-[20px] text-muted">
          {item.description}
        </AppText>
      </View>
    </Pressable>
  );
}
