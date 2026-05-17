import { Pressable } from 'react-native';

import AppText from '../AppText';

export default function FilterChip({ label, active, onPress }) {
  return (
    <Pressable
      className={`${active ? 'bg-[#D9E5FF]' : 'bg-white'} mb-[10px] mr-[10px] rounded-full px-[13px] py-[8px]`}
      onPress={onPress}
    >
      <AppText className={`${active ? 'text-homeBlue' : 'text-muted'} text-[12px] font-semibold leading-[15px]`}>
        {label}
      </AppText>
    </Pressable>
  );
}
