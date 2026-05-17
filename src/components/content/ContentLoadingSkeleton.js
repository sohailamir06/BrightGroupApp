import { View } from 'react-native';

export default function ContentLoadingSkeleton() {
  return (
    <View className="px-[24px] pt-[96px]">
      <View className="h-[54px] rounded-full bg-[#E8EDF2]" />
      {[0, 1, 2, 3].map((item) => (
        <View className="mt-[27px] h-[160px] rounded-[14px] bg-white" key={item} />
      ))}
    </View>
  );
}
