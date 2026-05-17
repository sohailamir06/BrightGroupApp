import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnnouncementTicker from '../components/home/AnnouncementTicker';
import BottomNavigation from '../components/home/BottomNavigation';
import DocumentCard from '../components/home/DocumentCard';
import FilterChips from '../components/home/FilterChips';
import HomeHeader from '../components/home/HomeHeader';
import InfoCard from '../components/home/InfoCard';
import NewsCard from '../components/home/NewsCard';
import { EmptyState, Section } from '../components/home/Section';
import TeammatesCard from '../components/home/TeammatesCard';
import { homeLabels } from '../constants/homeLabels';
import { ROUTES } from '../constants/routes';
import { homeMockData } from '../services/homeMockData';
import { useResponsive } from '../hooks/useResponsive';

export default function HomeScreen({ navigation }) {
  const { compact } = useResponsive();
  const data = homeMockData;
  const handleTabPress = (tabKey) => {
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
  const openNewsDetails = (item) => {
    navigation.navigate(ROUTES.NEWS_DETAILS, { newsId: item.newsId || item.id });
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-canvas">
      <View className="w-full max-w-[390px] flex-1 bg-canvas">
        <HomeHeader />
        <AnnouncementTicker />

        <ScrollView
          className="flex-1"
          contentContainerClassName={`px-[24px] pb-[62px] pt-[34px] ${
            compact ? 'min-h-[1280px]' : 'min-h-[1395px]'
          }`}
          showsVerticalScrollIndicator={false}
        >
          <Section title={homeLabels.newsTitle} onActionPress={() => navigation.navigate(ROUTES.NEWS_FEED)}>
            {data.announcements.length ? (
              data.announcements.map((item, index) => (
                <NewsCard
                  className={index > 0 ? 'mt-[16px]' : ''}
                  item={item}
                  key={item.id}
                  onPress={openNewsDetails}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </Section>

          <Section className="mt-[40px]" title={homeLabels.filesTitle} actionLabel={homeLabels.viewAllFiles}>
            {data.documents.length ? (
              data.documents.map((item, index) => (
                <DocumentCard className={index > 0 ? 'mt-[16px]' : ''} item={item} key={item.id} />
              ))
            ) : (
              <EmptyState />
            )}
          </Section>

          <Section className="mt-[36px]" title={homeLabels.teammatesTitle} actionLabel={null}>
            {data.teammates.length ? <TeammatesCard teammates={data.teammates} /> : <EmptyState />}
          </Section>

          <View className="mt-[40px]">
            <FilterChips filters={data.filters} />
          </View>

          <View className="mt-[30px]">
            <InfoCard insight={data.insight} />
          </View>
        </ScrollView>

        <BottomNavigation onTabPress={handleTabPress} />
      </View>
    </SafeAreaView>
  );
}
