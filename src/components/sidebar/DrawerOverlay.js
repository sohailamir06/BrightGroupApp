import { Animated, Pressable } from 'react-native';

export default function DrawerOverlay({ visible, opacity, onPress }) {
  if (!visible) {
    return null;
  }

  return (
    <Animated.View className="absolute inset-0 bg-[#191C1D33]" style={{ opacity }}>
      <Pressable className="h-full w-full" onPress={onPress} />
    </Animated.View>
  );
}
