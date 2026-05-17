import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import NotificationBadge from './NotificationBadge';

export default function SidebarMenuItem({ item, active, danger, onPress }) {
  return (
    <Pressable
      className={`mb-[18px] h-[42px] flex-row items-center rounded-full px-[16px] active:opacity-70 ${
        active ? 'bg-[#DCE8F6]' : 'bg-transparent'
      }`}
      onPress={() => onPress?.(item)}
    >
      <Feather name={item.icon} size={22} color={danger ? '#DC1F1F' : active ? '#005ECF' : '#4F6074'} />
      <AppText
        className={`ml-[18px] flex-1 text-[14px] font-semibold leading-[18px] ${
          danger ? 'text-[#DC1F1F]' : active ? 'text-[#005ECF]' : 'text-[#4F6074]'
        }`}
      >
        {item.label}
      </AppText>
      <NotificationBadge count={item.badge} />
    </Pressable>
  );
}
