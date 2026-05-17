import { Pressable } from 'react-native';

import { cn } from '../utils/classNames';
import AppText from './AppText';

export default function Button({ title, className, textClassName, ...props }) {
  return (
    <Pressable
      className={cn(
        'h-buttonH flex-row items-center justify-center rounded-button bg-action shadow-button active:bg-actionPressed',
        className,
      )}
      {...props}
    >
      <AppText className={cn('text-[16px] font-bold leading-[20px] text-ink', textClassName)}>
        {title}
      </AppText>
    </Pressable>
  );
}
