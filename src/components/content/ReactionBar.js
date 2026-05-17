import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function ReactionBar({ liked, likes, onLike, onShare }) {
  return (
    <View className="flex-row items-center">
      <Pressable className="mr-[18px] flex-row items-center" onPress={onLike}>
        <Feather name="heart" size={19} color={liked ? '#0B5CD7' : '#6B7785'} />
        <AppText className="ml-[6px] text-[13px] font-semibold text-muted">{likes}</AppText>
      </Pressable>
      <Pressable className="flex-row items-center" onPress={onShare}>
        <Feather name="share-2" size={18} color="#6B7785" />
        <AppText className="ml-[6px] text-[13px] font-semibold text-muted">Share</AppText>
      </Pressable>
    </View>
  );
}
