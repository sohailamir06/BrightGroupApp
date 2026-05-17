import { View } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View className="px-[24px] pt-[40px]">
      {[0, 1, 2].map((item) => (
        <View className="mb-[28px] overflow-hidden rounded-[9px] bg-white" key={item}>
          <View className="h-[214px] bg-[#E2E8EF]" />
          <View className="px-[28px] py-[22px]">
            <View className="h-[12px] w-[35%] rounded-full bg-[#E2E8EF]" />
            <View className="mt-[12px] h-[20px] w-[60%] rounded-full bg-[#E2E8EF]" />
            <View className="mt-[18px] h-[13px] w-full rounded-full bg-[#EEF2F5]" />
          </View>
        </View>
      ))}
    </View>
  );
}
