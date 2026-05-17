import { Feather } from '@expo/vector-icons';
import { Image, Pressable, View } from 'react-native';

import { useSidebar } from '../../hooks/sidebar/useSidebar';
import AppText from '../AppText';

export default function HomeHeader() {
  const { openSidebar } = useSidebar();

  return (
    <View className="h-[61px] w-full flex-row items-center justify-between border-b border-[#AAB3B91A] bg-[#F8F9FBCC] px-[16px] py-[12px]">
      <View className="flex-row items-center">
        <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={openSidebar}>
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
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
          }}
        />
      </View>
    </View>
  );
}
