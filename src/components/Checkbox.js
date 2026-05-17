import { Pressable, View } from 'react-native';

import { cn } from '../utils/classNames';
import AppText from './AppText';

export default function Checkbox({ checked, label, onChange, className }) {
  return (
    <Pressable
      className={cn('flex-row items-center', className)}
      onPress={() => onChange?.(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <View
        className={cn(
          'h-[16px] w-[16px] items-center justify-center rounded-[3px] border border-line bg-surface',
          checked && 'border-ink bg-ink',
        )}
      >
        {checked ? <View className="h-[7px] w-[7px] rounded-full bg-surface" /> : null}
      </View>
      <AppText className="ml-[9px] text-[15px] leading-[19px] text-[#59636E]">
        {label}
      </AppText>
    </Pressable>
  );
}
