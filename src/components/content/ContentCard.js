import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import BookmarkButton from './BookmarkButton';
import MediaPreview from './MediaPreview';

export default function ContentCard({ post, onPress, onBookmark }) {
  return (
    <Pressable className="mb-[16px] flex-row rounded-[14px] bg-contentSoft px-[16px] py-[24px]" onPress={() => onPress?.(post)}>
      <MediaPreview post={post} />
      <View className="ml-[23px] flex-1">
        <AppText
          className={`text-[10px] font-bold uppercase leading-[12px] tracking-[1.4px] ${
            post.categoryLabel === 'Marketing' ? 'text-contentOrange' : 'text-homeBlue'
          }`}
        >
          {post.categoryLabel}
        </AppText>
        <AppText className="mt-[6px] text-[16px] font-bold leading-[21px] text-charcoal" numberOfLines={2}>
          {post.title}
        </AppText>
        <AppText className="mt-[6px] text-[16px] leading-[21px] text-[#4C5665]">
          {post.viewedAt} •{'\n'}
          {post.size}
        </AppText>
      </View>
      <View className="items-center justify-between">
        <Feather name="more-vertical" size={21} color="#6B7785" />
        <BookmarkButton active={post.bookmarked} onPress={() => onBookmark?.(post.id)} />
      </View>
    </Pressable>
  );
}
