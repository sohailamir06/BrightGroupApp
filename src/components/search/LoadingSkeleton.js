import { View } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View>
      {[0, 1, 2].map((item) => (
        <View className="mb-[14px] flex-row rounded-searchCard bg-white px-[18px] py-[18px]" key={item}>
          <View className="h-[42px] w-[42px] rounded-[8px] bg-[#E8EDF2]" />
          <View className="ml-[14px] flex-1">
            <View className="h-[16px] w-[55%] rounded-full bg-[#E8EDF2]" />
            <View className="mt-[10px] h-[12px] w-full rounded-full bg-[#EEF2F5]" />
            <View className="mt-[7px] h-[12px] w-[70%] rounded-full bg-[#EEF2F5]" />
          </View>
        </View>
      ))}
    </View>
  );
}
