import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../../AppText';

export default function ReactionBar({ liked, likes, comments, onLike, onShare }) {
  return (
    <View className="mt-[28px] border-t border-[#EEF0F3] pt-[31px]">
      <View className="flex-row items-center justify-between">
        <Pressable
          className={`${liked ? 'bg-[#F0F1F3]' : 'bg-white'} h-[40px] flex-row items-center rounded-full px-[16px]`}
          onPress={onLike}
        >
          <Feather name="heart" size={20} color="#A13D00" />
          <AppText className="ml-[7px] text-[16px] font-semibold leading-[20px] text-[#20242A]">{likes}</AppText>
        </Pressable>
        <Pressable className="h-[40px] flex-row items-center px-[4px]">
          <Feather name="message-square" size={24} color="#20242A" />
          <AppText className="ml-[10px] text-[16px] leading-[20px] text-[#20242A]">{comments}</AppText>
        </Pressable>
        <Pressable className="h-[40px] w-[40px] items-center justify-center">
          <Feather name="flag" size={22} color="#20242A" />
        </Pressable>
        <Pressable className="h-[40px] w-[40px] items-center justify-center" onPress={onShare}>
          <Feather name="share-2" size={22} color="#20242A" />
        </Pressable>
      </View>
    </View>
  );
}
