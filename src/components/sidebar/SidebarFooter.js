import { View } from 'react-native';

import AppText from '../AppText';
import LogoutButton from './LogoutButton';

export default function SidebarFooter({ onLogout }) {
  return (
    <View className="mt-auto px-[24px] pb-[34px]">
      <View className="mb-[264px]">
        <LogoutButton onPress={onLogout} />
      </View>
      <AppText className="px-[8px] text-[10px] font-bold uppercase leading-[12px] tracking-[3px] text-[#9AABC3]">
        POWERED BY FLUID ENTERPRISE
      </AppText>
    </View>
  );
}
