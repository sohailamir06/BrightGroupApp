import { Feather } from '@expo/vector-icons';
import { Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../../components/home/BottomNavigation';
import BookmarkButton from '../../components/news/details/BookmarkButton';
import EmptyState from '../../components/news/details/EmptyState';
import LoadingSkeleton from '../../components/news/details/LoadingSkeleton';
import NewsContent from '../../components/news/details/NewsContent';
import NewsHeroBanner from '../../components/news/details/NewsHeroBanner';
import NewsMetaInfo from '../../components/news/details/NewsMetaInfo';
import ReactionBar from '../../components/news/details/ReactionBar';
import ReadProgressBar from '../../components/news/details/ReadProgressBar';
import RelatedNewsCard from '../../components/news/details/RelatedNewsCard';
import ShareButton from '../../components/news/details/ShareButton';
import AppText from '../../components/AppText';
import { ROUTES } from '../../constants/routes';
import { useNewsDetails } from '../../hooks/news/useNewsDetails';
import { formatArticleMeta } from '../../utils/news/newsDetails';

export default function NewsDetailsScreen({ navigation, route }) {
  const news = useNewsDetails(route.params?.newsId);
  const { item, author } = news;

  const handleTabPress = (tabKey) => {
    if (tabKey === 'home') {
      navigation.navigate(ROUTES.HOME);
    }
    if (tabKey === 'search') {
      navigation.navigate(ROUTES.SEARCH);
    }
    if (tabKey === 'chat') {
      navigation.navigate(ROUTES.CHAT_LIST);
    }
    if (tabKey === 'content') {
      navigation.navigate(ROUTES.CONTENT_FEED);
    }
    if (tabKey === 'org') {
      navigation.navigate(ROUTES.ORG_CHART);
    }
  };

  if (news.isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center bg-contentCanvas">
        <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
          <LoadingSkeleton />
        </View>
      </SafeAreaView>
    );
  }

  if (news.error || !item) {
    return (
      <SafeAreaView className="flex-1 items-center bg-contentCanvas">
        <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
          <EmptyState />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-contentCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
        <View className="h-[64px] w-full flex-row items-center justify-between bg-[#F8F9FACC] px-[24px] py-[12px]">
          <Pressable className="h-[40px] w-[40px] items-center justify-center" onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#111827" />
          </Pressable>
          <View className="flex-row items-center">
            <ShareButton />
            <BookmarkButton active={item.bookmarked} onPress={news.toggleBookmark} />
          </View>
        </View>
        <ReadProgressBar progress={0} />

        <ScrollView className="flex-1" contentContainerClassName="pb-[130px]" showsVerticalScrollIndicator={false}>
          <NewsHeroBanner image={item.heroImage} />

          <View className="mx-[24px] mt-[-42px] rounded-[10px] bg-white px-[32px] pb-[32px] pt-[32px]">
            <NewsMetaInfo article={item} author={author} meta={formatArticleMeta(item)} />
            <NewsContent sections={news.sections} />
            <ReactionBar
              comments={item.commentCount}
              liked={item.liked}
              likes={item.likes}
              onLike={news.toggleLike}
            />
          </View>

          <View className="px-[24px] pt-[48px]">
            <AppText className="mb-[24px] text-[19px] font-bold leading-[24px] text-[#20242A]">
              Related Articles
            </AppText>
            {news.relatedArticles.map((article) => (
              <RelatedNewsCard article={article} key={article.id} />
            ))}
          </View>
        </ScrollView>

        <BottomNavigation activeKey="content" onTabPress={handleTabPress} variant="content" />
      </View>
    </SafeAreaView>
  );
}
