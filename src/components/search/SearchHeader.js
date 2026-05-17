import { Feather } from '@expo/vector-icons';
import { Image, Pressable, View } from 'react-native';

import { useSidebar } from '../../hooks/sidebar/useSidebar';
import AppText from '../AppText';

export default function SearchHeader({ onMenuPress }) {
  const { openSidebar } = useSidebar();
  const handleMenuPress = onMenuPress || openSidebar;

  return (
    <View className="h-[69px] w-full flex-row items-center justify-between border-b border-[#AAB3B94D] bg-[#F8F9FBCC] px-[16px]">
      <View className="flex-row items-center">
        <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={handleMenuPress}>
          <Feather name="menu" size={24} color="#4B5563" />
        </Pressable>
        <AppText className="ml-[18px] text-[20px] font-bold leading-[24px] text-ink">
          BrightNow
        </AppText>
      </View>

      <View className="flex-row items-center">
        <Pressable className="h-[34px] w-[34px] items-center justify-center">
          <Feather name="bell" size={21} color="#4B5563" />
        </Pressable>
        <Image
          className="ml-[11px] h-[34px] w-[34px] rounded-full"
          source={{
            uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
          }}
        />
      </View>
    </View>
  );
}
