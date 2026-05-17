import { View } from 'react-native';

export default function AuthCard({ children }) {
  return (
    <View className="w-full rounded-card border border-line bg-surface px-cardX pb-[52px] pt-[42px] shadow-soft">
      {children}
    </View>
  );
}
