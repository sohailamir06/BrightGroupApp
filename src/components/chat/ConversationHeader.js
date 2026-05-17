import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import Avatar from './Avatar';

export default function ConversationHeader({ user, onBack }) {
  return (
    <View className="h-[69px] flex-row items-center border-b border-[#AAB3B94D] bg-[#F8F9FBCC] px-[16px]">
      <Pressable className="h-[36px] w-[36px] items-center justify-center" onPress={onBack}>
        <Feather name="chevron-left" size={28} color="#2A3038" />
      </Pressable>
      <Avatar user={user} size={48} showStatus />
      <View className="ml-[13px] flex-1">
        <AppText className="text-[17px] font-bold leading-[21px] text-charcoal">{user?.name}</AppText>
        <AppText className="mt-[2px] text-[12px] leading-[15px] text-muted">
          {user?.online ? 'Online' : 'Offline'}
        </AppText>
      </View>
      <Feather name="more-horizontal" size={24} color="#4B5563" />
    </View>
  );
}
