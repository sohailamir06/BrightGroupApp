import { View } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View className="px-[24px] pb-[40px] pt-[32px]">
      <View className="h-[46px] rounded-[12px] bg-[#E9EDF2]" />
      <View className="mt-[28px] h-[224px] rounded-[18px] bg-[#E1E7EE]" />
      <View className="mt-[30px] h-[324px] rounded-[14px] bg-[#E9EDF2]" />
      <View className="mt-[24px] h-[324px] rounded-[14px] bg-[#E9EDF2]" />
    </View>
  );
}
