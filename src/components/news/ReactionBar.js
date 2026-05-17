import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function ReactionBar({ liked, likes, onLike, onShare, onToggleRead, read }) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Pressable className="mr-[16px] flex-row items-center" onPress={onLike}>
          <Feather name="heart" size={18} color={liked ? '#0B5CD7' : '#9AA7B5'} />
          <AppText className="ml-[6px] text-[12px] font-semibold leading-[15px] text-muted">{likes}</AppText>
        </Pressable>
        <Pressable className="mr-[16px] flex-row items-center" onPress={onShare}>
          <Feather name="share-2" size={17} color="#9AA7B5" />
          <AppText className="ml-[6px] text-[12px] font-semibold leading-[15px] text-muted">Share</AppText>
        </Pressable>
      </View>
      {onToggleRead ? (
        <Pressable className="flex-row items-center" onPress={onToggleRead}>
          <Feather name={read ? 'mail' : 'mail-open'} size={17} color="#9AA7B5" />
          <AppText className="ml-[6px] text-[12px] font-semibold leading-[15px] text-muted">
            {read ? 'Unread' : 'Read'}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}
