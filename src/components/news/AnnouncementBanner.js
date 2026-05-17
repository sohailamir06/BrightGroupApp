import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function AnnouncementBanner({ item, onPress }) {
  if (!item) {
    return null;
  }

  return (
    <Pressable className="h-[36px] flex-row items-center bg-homeBlueSoft px-[24px]" onPress={() => onPress?.(item)}>
      <AppText className="flex-1 text-[14px] leading-[18px] text-ink" numberOfLines={1}>
        {item.title}. {item.summary}
      </AppText>
      <Feather name="chevron-right" size={17} color="#0A124B" />
    </Pressable>
  );
}
