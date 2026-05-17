import { View } from 'react-native';

import AppText from '../AppText';

export default function ReadStatusBadge({ read }) {
  return (
    <View className={`${read ? 'bg-[#EEF0F3]' : 'bg-[#E8F0FF]'} rounded-full px-[9px] py-[4px]`}>
      <AppText className={`${read ? 'text-muted' : 'text-homeBlue'} text-[10px] font-bold uppercase leading-[12px]`}>
        {read ? 'Read' : 'Unread'}
      </AppText>
    </View>
  );
}
