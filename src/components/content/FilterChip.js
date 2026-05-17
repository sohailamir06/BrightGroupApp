import { Pressable } from 'react-native';

import AppText from '../AppText';

export default function FilterChip({ label, active, onPress }) {
  return (
    <Pressable className={`mr-[8px] rounded-full px-[14px] py-[8px] ${active ? 'bg-action' : 'bg-contentSoft'}`} onPress={onPress}>
      <AppText className={`text-[12px] font-semibold ${active ? 'text-homeBlue' : 'text-muted'}`}>
        {label}
      </AppText>
    </Pressable>
  );
}
