import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import Avatar from './Avatar';

export default function ConversationHeader({ user, onBack }) {
  return (
    <View className="h-[80px] flex-row items-center bg-canvas px-[24px]">
      <Pressable className="ml-[-6px] h-[36px] w-[36px] items-center justify-center" onPress={onBack}>
        <Feather name="arrow-left" size={24} color="#0B5CD7" />
      </Pressable>
      <Avatar user={user} size={42} showStatus />
      <View className="ml-[12px] flex-1">
        <AppText className="text-[22px] font-bold leading-[27px] text-charcoal">{user?.name}</AppText>
        <AppText className="mt-[-2px] text-[11px] uppercase leading-[14px] tracking-[2px] text-silver">
          {user?.online ? 'Online Now' : 'Offline'}
        </AppText>
      </View>
      <Feather name="more-vertical" size={22} color="#0B5CD7" />
    </View>
  );
}
