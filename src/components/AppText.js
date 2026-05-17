import { Text } from 'react-native';

import { typography } from '../constants/theme';
import { cn } from '../utils/classNames';

export default function AppText({ className, children, variant, ...props }) {
  return (
    <Text className={cn('font-body text-charcoal', variant ? typography[variant] : '', className)} {...props}>
      {children}
    </Text>
  );
}
