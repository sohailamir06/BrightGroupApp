import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../../components/home/BottomNavigation';
import CategoryChip from '../../components/search/CategoryChip';
import LoadingSkeleton from '../../components/search/LoadingSkeleton';
import QuickActionCard from '../../components/search/QuickActionCard';
import RecentSearchItem from '../../components/search/RecentSearchItem';
import SearchEmptyState from '../../components/search/SearchEmptyState';
import SearchHeader from '../../components/search/SearchHeader';
import SearchInput from '../../components/search/SearchInput';
import SearchResultCard from '../../components/search/SearchResultCard';
import SectionHeader from '../../components/search/SectionHeader';
import AppText from '../../components/AppText';
import { ROUTES } from '../../constants/routes';
import { useResponsive } from '../../hooks/useResponsive';
import { useSearch } from '../../hooks/search/useSearch';

export default function SearchScreen({ navigation }) {
  const search = useSearch();
  const { compact } = useResponsive();

  const handleTabPress = (tabKey) => {
    if (tabKey === 'home') {
      navigation.navigate(ROUTES.HOME);
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

  const handleCategoryPress = (category) => {
    search.setActiveCategory(category.id === 'people' ? 'person' : category.id.replace('documents', 'document').replace('policies', 'policy'));
    search.setQuery(category.title);
  };

  const renderHeader = () => (
    <View className={`px-[24px] pt-[40px] ${compact ? 'pb-[36px]' : 'pb-[48px]'}`}>
      <AppText className="text-[56px] font-bold leading-[57px] tracking-[-2px] text-charcoal">
        Find{'\n'}anything.
      </AppText>

      <View className="mt-[29px]">
        <SearchInput value={search.query} onChangeText={search.setQuery} onClear={search.clearQuery} />
      </View>

      {!search.hasQuery ? (
        <>
          <SectionHeader className="mt-[51px]" title="Search Categories" />
          <View className="mt-[25px] flex-row flex-wrap justify-between">
            {search.data.categories.map((category) => (
              <CategoryChip item={category} key={category.id} onPress={handleCategoryPress} />
            ))}
          </View>

          <SectionHeader className="mt-[35px]" title="Trending Now" />
          <View className="mt-[26px] flex-row flex-wrap">
            {search.data.trending.map((item, index) => (
              <View
                className={`mb-[14px] mr-[11px] rounded-full border border-line px-[24px] py-[14px] ${
                  index === 0 ? 'bg-action' : 'bg-white'
                }`}
                key={item}
              >
                <AppText
                  className={`text-[16px] leading-[20px] ${
                    index === 0 ? 'font-bold text-homeBlue' : 'text-charcoal'
                  }`}
                  onPress={() => search.setQuery(item.replace('#', ''))}
                >
                  {item}
                </AppText>
              </View>
            ))}
          </View>

          <SectionHeader className="mt-[37px]" title="Recent Searches" />
          <View className="mt-[25px]">
            {search.recentSearches.map((item) => (
              <RecentSearchItem key={item} label={item} onPress={search.setQuery} />
            ))}
          </View>

          <View className="mt-[30px]">
            <QuickActionCard action={search.data.quickAction} />
          </View>
        </>
      ) : (
        <View className="mt-[38px]">
          <SectionHeader title={`Results for "${search.debouncedQuery || search.query}"`} />
          {search.suggestions.length ? (
            <View className="mt-[14px] flex-row flex-wrap">
              {search.suggestions.map((suggestion) => (
                <View className="mb-[10px] mr-[8px] rounded-full bg-white px-[14px] py-[8px]" key={suggestion}>
                  <AppText className="text-[13px] leading-[16px] text-muted" onPress={() => search.setQuery(suggestion)}>
                    {suggestion}
                  </AppText>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      )}
    </View>
  );

  const renderSearchState = () => {
    if (!search.hasQuery && !search.isLoading) {
      return null;
    }

    if (search.isLoading) {
      return (
        <View className="px-[24px]">
          <LoadingSkeleton />
        </View>
      );
    }

    if (search.hasNoResults) {
      return (
        <View className="px-[24px]">
          <SearchEmptyState
            title="No results found"
            body="Try another keyword or browse the categories above."
          />
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-canvas">
      <KeyboardAvoidingView
        className="w-full max-w-[390px] flex-1 bg-canvas"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SearchHeader />
        <FlatList
          className="flex-1"
          contentContainerClassName={`pb-[134px] ${compact ? 'min-h-[1450px]' : 'min-h-[1738px]'}`}
          data={search.hasQuery && !search.isLoading ? search.results : []}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderSearchState}
          renderItem={({ item }) => (
            <View className="px-[24px]">
              <SearchResultCard item={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
        <BottomNavigation activeKey="search" onTabPress={handleTabPress} variant="search" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
