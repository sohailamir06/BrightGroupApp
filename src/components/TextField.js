import { TextInput, View } from 'react-native';

import { colors } from '../constants/theme';
import { cn } from '../utils/classNames';
import AppText from './AppText';

export default function TextField({
  label,
  actionLabel,
  onActionPress,
  className,
  inputClassName,
  ...props
}) {
  return (
    <View className={cn('w-full', className)}>
      <View className="mb-[10px] flex-row items-center justify-between">
        <AppText className="text-label font-medium uppercase tracking-[0.7px] text-[#4C5661]">
          {label}
        </AppText>
        {actionLabel ? (
          <AppText
            className="text-label font-bold uppercase tracking-[0.7px] text-accent"
            onPress={onActionPress}
          >
            {actionLabel}
          </AppText>
        ) : null}
      </View>
      <TextInput
        className={cn(
          'h-inputH rounded-input bg-field px-[17px] text-[14px] leading-[18px] text-charcoal',
          inputClassName,
        )}
        placeholderTextColor={colors.silver}
        selectionColor={colors.ink}
        {...props}
      />
    </View>
  );
}
