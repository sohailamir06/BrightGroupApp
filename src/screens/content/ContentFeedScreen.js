import { FlatList, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../../components/home/BottomNavigation';
import CategoryTabs from '../../components/content/CategoryTabs';
import ContentCard from '../../components/content/ContentCard';
import ContentEmptyState from '../../components/content/ContentEmptyState';
import ContentHeader from '../../components/content/ContentHeader';
import ContentLoadingSkeleton from '../../components/content/ContentLoadingSkeleton';
import ContentSearchBar from '../../components/content/ContentSearchBar';
import FeaturedContentCard from '../../components/content/FeaturedContentCard';
import FilterChip from '../../components/content/FilterChip';
import SectionHeader from '../../components/content/SectionHeader';
import { ROUTES } from '../../constants/routes';
import { useContentFeed } from '../../hooks/content/useContentFeed';

export default function ContentFeedScreen({ navigation }) {
  const content = useContentFeed();

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
    if (tabKey === 'org') {
      navigation.navigate(ROUTES.ORG_CHART);
    }
  };

  const openDetails = (post) => {
    navigation.navigate(ROUTES.CONTENT_DETAILS, { contentId: post.id });
  };

  const renderHeader = () => (
    <View className="px-[24px] pb-[27px] pt-[96px]">
      <ContentSearchBar value={content.query} onChangeText={content.setQuery} onClear={content.clearQuery} />

      <View className="mt-[52px]">
        <SectionHeader title="Resource Library" />
        {content.categories.map((category) => (
          <FeaturedContentCard
            category={category}
            key={category.id}
            onPress={() => content.setActiveCategoryId(category.id)}
          />
        ))}
      </View>

      <View className="mt-[42px]">
        <SectionHeader
          title="Recently Viewed"
          subtitle="Pick up where you left off"
          actionLabel="View All History"
        />
        <CategoryTabs
          categories={content.categories}
          activeId={content.activeCategoryId}
          onChange={content.setActiveCategoryId}
        />
        <View className="mt-[14px] flex-row flex-wrap">
          {content.tags.map((tag) => (
            <FilterChip active={content.query === tag} key={tag} label={tag} onPress={() => content.setQuery(tag)} />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-contentCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-contentCanvas">
        <ContentHeader />
        {content.isLoading ? (
          <ContentLoadingSkeleton />
        ) : (
          <FlatList
            className="flex-1"
            contentContainerClassName="min-h-[1704px] px-[24px] pb-[161px]"
            data={content.posts}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={<ContentEmptyState />}
            refreshControl={
              <RefreshControl refreshing={content.refreshing} onRefresh={content.refresh} />
            }
            renderItem={({ item }) => (
              <ContentCard post={item} onBookmark={content.toggleSaved} onPress={openDetails} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
        <BottomNavigation activeKey="content" onTabPress={handleTabPress} variant="content" />
      </View>
    </SafeAreaView>
  );
}
