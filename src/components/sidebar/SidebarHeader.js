import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function SidebarHeader({ onClose }) {
  return (
    <View className="h-[72px] flex-row items-center justify-between bg-[#F8F9FACC] px-[24px] py-[16px] shadow-sm">
      <AppText className="text-[18px] font-bold text-ink">BrightNow</AppText>
      <Pressable className="h-[34px] w-[34px] items-center justify-center rounded-full bg-white" onPress={onClose}>
        <Feather name="x" size={20} color="#4B5563" />
      </Pressable>
    </View>
  );
}
