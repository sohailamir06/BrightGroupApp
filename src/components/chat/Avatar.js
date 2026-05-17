import { Image, View } from 'react-native';

import AppText from '../AppText';
import OnlineStatus from './OnlineStatus';

export default function Avatar({ user, size = 56, showStatus = false }) {
  const dimensionClass = size === 48 ? 'h-[48px] w-[48px]' : 'h-[56px] w-[56px]';
  const initials = user?.name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <View>
      {user?.avatar || user?.fallbackAvatar ? (
        <Image className={`${dimensionClass} rounded-full`} source={{ uri: user.fallbackAvatar || user.avatar }} />
      ) : (
        <View className={`${dimensionClass} items-center justify-center rounded-full bg-[#DDE6ED]`}>
          <AppText className="text-[15px] font-bold text-charcoal">{initials}</AppText>
        </View>
      )}
      {showStatus ? <OnlineStatus online={user?.online} /> : null}
    </View>
  );
}
