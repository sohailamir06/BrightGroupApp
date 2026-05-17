import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import SidebarMenuItem from './SidebarMenuItem';

export default function SidebarMenuGroup({
  group,
  expanded,
  activeItemId,
  onToggle,
  onItemPress,
}) {
  const visible = !group.collapsible || expanded;

  return (
    <View className="px-[24px]">
      {group.collapsible ? (
        <Pressable className="mb-[12px] flex-row items-center justify-between px-[8px]" onPress={() => onToggle?.(group.id)}>
          <AppText className="text-[10px] font-bold uppercase tracking-[1.4px] text-silver">
            {group.title}
          </AppText>
          <Feather name={expanded ? 'chevron-up' : 'chevron-down'} size={16} color="#AAB3B9" />
        </Pressable>
      ) : null}
      {visible
        ? group.items.map((item) => (
            <SidebarMenuItem
              active={activeItemId === item.id}
              item={item}
              key={item.id}
              onPress={onItemPress}
            />
          ))
        : null}
    </View>
  );
}
