import { View } from 'react-native';

export default function TypingIndicator({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <View className="mb-[10px] flex-row items-center rounded-full bg-white px-[14px] py-[10px]">
      <View className="h-[6px] w-[6px] rounded-full bg-silver" />
      <View className="mx-[5px] h-[6px] w-[6px] rounded-full bg-silver" />
      <View className="h-[6px] w-[6px] rounded-full bg-silver" />
    </View>
  );
}
