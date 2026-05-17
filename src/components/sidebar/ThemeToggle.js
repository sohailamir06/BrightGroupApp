import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function ThemeToggle({ enabled, onToggle }) {
  return (
    <Pressable className="mx-[24px] mt-[2px] flex-row items-center rounded-full px-[16px] py-[10px]" onPress={() => onToggle?.(!enabled)}>
      <Feather name={enabled ? 'moon' : 'sun'} size={20} color="#4F6074" />
      <AppText className="ml-[18px] flex-1 text-[14px] font-semibold text-[#4F6074]">
        Dark Mode
      </AppText>
      <View className={`h-[22px] w-[40px] justify-center rounded-full px-[3px] ${enabled ? 'items-end bg-homeBlue' : 'items-start bg-[#DDE6ED]'}`}>
        <View className="h-[16px] w-[16px] rounded-full bg-white" />
      </View>
    </Pressable>
  );
}
