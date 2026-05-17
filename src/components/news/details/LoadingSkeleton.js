import { View } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View className="flex-1 bg-contentCanvas">
      <View className="h-[318px] bg-[#E1E7EE]" />
      <View className="mx-[24px] mt-[-24px] rounded-[10px] bg-white px-[32px] py-[32px]">
        <View className="h-[24px] w-[120px] rounded-full bg-[#E9EDF2]" />
        <View className="mt-[32px] h-[112px] rounded-[10px] bg-[#E9EDF2]" />
        <View className="mt-[32px] h-[260px] rounded-[10px] bg-[#E9EDF2]" />
      </View>
    </View>
  );
}
