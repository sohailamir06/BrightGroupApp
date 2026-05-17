import { Pressable } from 'react-native';

import AppText from '../AppText';

export default function FilterChip({ label, active, onPress }) {
  return (
    <Pressable
      className={`mb-[10px] mr-[9px] rounded-full px-[17px] py-[9px] ${
        active ? 'bg-action' : 'bg-white'
      }`}
      onPress={onPress}
    >
      <AppText className={`text-[11px] font-bold leading-[13px] ${active ? 'text-ink' : 'text-charcoal'}`}>
        {label}
      </AppText>
    </Pressable>
  );
}
