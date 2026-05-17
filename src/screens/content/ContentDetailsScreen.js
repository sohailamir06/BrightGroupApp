import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../../components/AppText';
import BookmarkButton from '../../components/content/BookmarkButton';
import ContentHeader from '../../components/content/ContentHeader';
import MediaPreview from '../../components/content/MediaPreview';
import ReactionBar from '../../components/content/ReactionBar';
import { useContentDetails } from '../../hooks/content/useContentDetails';

export default function ContentDetailsScreen({ route }) {
  const content = useContentDetails(route.params?.contentId);

  return (
    <SafeAreaView className="flex-1 items-center bg-contentCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
        <ContentHeader />
        <ScrollView className="flex-1" contentContainerClassName="px-[24px] pb-[48px] pt-[32px]">
          <MediaPreview post={content.post} large />
          <View className="mt-[24px] flex-row items-start justify-between">
            <View className="flex-1 pr-[16px]">
              <AppText className="text-[11px] font-bold uppercase leading-[13px] tracking-[1.4px] text-homeBlue">
                {content.post.categoryLabel}
              </AppText>
              <AppText className="mt-[9px] text-[28px] font-bold leading-[34px] text-charcoal">
                {content.post.title}
              </AppText>
            </View>
            <BookmarkButton active={content.post.bookmarked} onPress={content.toggleBookmark} />
          </View>

          <AppText className="mt-[12px] text-[14px] leading-[20px] text-muted">
            {content.author?.name} • {content.post.size}
          </AppText>

          <View className="mt-[24px]">
            <ReactionBar
              liked={content.post.liked}
              likes={content.post.likes}
              onLike={content.toggleLike}
            />
          </View>

          <AppText className="mt-[30px] text-[17px] leading-[28px] text-[#4C5665]">
            {content.post.excerpt}
            {'\n\n'}
            This local preview is structured for future CMS content rendering, offline caching,
            analytics events, recommendations, pagination, and media upload support.
          </AppText>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
