import { View } from 'react-native';

export default function ReadProgressBar({ progress = 0 }) {
  const widthClass = progress > 75 ? 'w-3/4' : progress > 50 ? 'w-1/2' : progress > 25 ? 'w-1/4' : 'w-[0px]';

  return (
    <View className="h-[2px] w-full bg-transparent">
      <View className={`${widthClass} h-[2px] bg-homeBlue`} />
    </View>
  );
}
