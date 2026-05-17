import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import AppText from '../AppText';

export default function RecentSearchItem({ label, onPress }) {
  return (
    <Pressable className="h-[58px] flex-row items-center px-[14px]" onPress={() => onPress?.(label)}>
      <Feather name="clock" size={20} color="#A8B2BC" />
      <AppText className="ml-[16px] text-[16px] font-semibold leading-[20px] text-charcoal">
        {label}
      </AppText>
    </Pressable>
  );
}
