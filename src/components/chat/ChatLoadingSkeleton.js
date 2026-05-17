import { View } from 'react-native';

export default function ChatLoadingSkeleton() {
  return (
    <View>
      {[0, 1, 2, 3].map((item) => (
        <View className="mb-[16px] flex-row rounded-searchCard bg-white px-[16px] py-[18px]" key={item}>
          <View className="h-[56px] w-[56px] rounded-full bg-[#E2E8EF]" />
          <View className="ml-[16px] flex-1">
            <View className="h-[16px] w-[48%] rounded-full bg-[#E2E8EF]" />
            <View className="mt-[12px] h-[13px] w-full rounded-full bg-[#EEF2F5]" />
            <View className="mt-[7px] h-[13px] w-[70%] rounded-full bg-[#EEF2F5]" />
          </View>
        </View>
      ))}
    </View>
  );
}
