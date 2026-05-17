import { Text } from 'react-native';

import { cn } from '../utils/classNames';

export default function AppText({ className, children, ...props }) {
  return (
    <Text className={cn('font-body text-charcoal', className)} {...props}>
      {children}
    </Text>
  );
}
