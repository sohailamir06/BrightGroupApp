import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cn } from '../utils/classNames';

export default function Screen({ children, className, contentClassName }) {
  return (
    <SafeAreaView className={cn('flex-1 bg-canvas', className)}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName={cn(
            'min-h-[965px] items-center bg-canvas',
            contentClassName,
          )}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full max-w-[390px] flex-1 px-screenX">
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
