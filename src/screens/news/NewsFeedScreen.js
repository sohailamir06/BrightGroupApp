import { FlatList, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnnouncementBanner from '../../components/news/AnnouncementBanner';
import BottomNavigation from '../../components/home/BottomNavigation';
import EmptyState from '../../components/news/EmptyState';
import FeaturedNewsCard from '../../components/news/FeaturedNewsCard';
import LoadingSkeleton from '../../components/news/LoadingSkeleton';
import NewsCard from '../../components/news/NewsCard';
import NewsHeader from '../../components/news/NewsHeader';
import SectionHeader from '../../components/news/SectionHeader';
import { ROUTES } from '../../constants/routes';
import { useNewsFeed } from '../../hooks/news/useNewsFeed';

export default function NewsFeedScreen({ navigation }) {
  const news = useNewsFeed();
  const topAnnouncement = news.pinnedItems[0] || news.featuredItems[0];

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

  const openDetails = (item) => {
    navigation.navigate(ROUTES.NEWS_DETAILS, { newsId: item.id });
  };

  const renderPinnedItem = ({ item }) => <FeaturedNewsCard item={item} onPress={openDetails} />;

  const renderHeader = () => (
    <View className="pb-[4px] pt-[27px]">
      <View className="px-[24px]">
        <SectionHeader title="Pinned Updates" actionLabel="View all" onActionPress={() => news.setActiveSortId('pinned')} />
      </View>
      <FlatList
        contentContainerClassName="pl-[24px] pr-[8px]"
        data={news.pinnedItems}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderPinnedItem}
        showsHorizontalScrollIndicator={false}
      />

      <View className="mt-[43px] px-[24px]">
        <SectionHeader title="Latest Feed" />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-contentCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
        <NewsHeader />
        <AnnouncementBanner item={topAnnouncement} onPress={openDetails} />
        {news.isLoading ? (
          <LoadingSkeleton />
        ) : (
          <FlatList
            className="flex-1"
            contentContainerClassName="min-h-[1791px] px-[24px] pb-[116px]"
            data={news.latestItems}
            initialNumToRender={4}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <EmptyState title="No announcements found" body="New updates will appear here as they are published." />
            }
            ListHeaderComponent={renderHeader}
            maxToRenderPerBatch={6}
            onEndReached={news.loadNextPage}
            onEndReachedThreshold={0.4}
            refreshControl={<RefreshControl refreshing={news.refreshing} onRefresh={news.refresh} />}
            removeClippedSubviews
            renderItem={({ item }) => (
              <NewsCard
                item={item}
                onBookmark={news.toggleSaved}
                onLike={news.toggleLike}
                onPress={openDetails}
                onToggleRead={news.toggleRead}
              />
            )}
            showsVerticalScrollIndicator={false}
            windowSize={7}
          />
        )}
        <BottomNavigation activeKey="home" onTabPress={handleTabPress} variant="news" />
      </View>
    </SafeAreaView>
  );
}
