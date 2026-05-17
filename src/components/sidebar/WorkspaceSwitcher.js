import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function WorkspaceSwitcher({ workspaces, activeWorkspaceId, onChange }) {
  const activeWorkspace = workspaces.find((workspace) => workspace.id === activeWorkspaceId) || workspaces[0];

  return (
    <Pressable className="mx-[24px] mt-[24px] flex-row items-center rounded-[14px] bg-white px-[14px] py-[13px]" onPress={() => onChange?.(workspaces.find((workspace) => !workspace.active)?.id || activeWorkspace.id)}>
      <View className="h-[34px] w-[34px] items-center justify-center rounded-full bg-[#E8F0FF]">
        <Feather name="briefcase" size={17} color="#0B5CD7" />
      </View>
      <View className="ml-[10px] flex-1">
        <AppText className="text-[13px] font-bold text-charcoal">{activeWorkspace.name}</AppText>
        <AppText className="mt-[2px] text-[11px] text-muted">{activeWorkspace.plan}</AppText>
      </View>
      <Feather name="chevron-down" size={18} color="#6B7785" />
    </Pressable>
  );
}
