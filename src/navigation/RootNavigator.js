import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/routes';
import ChatListScreen from '../screens/chat/ChatListScreen';
import ConversationScreen from '../screens/chat/ConversationScreen';
import ContentDetailsScreen from '../screens/content/ContentDetailsScreen';
import ContentFeedScreen from '../screens/content/ContentFeedScreen';
import FilesScreen from '../screens/files/FilesScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NewsDetailsScreen from '../screens/news/NewsDetailsScreen';
import NewsFeedScreen from '../screens/news/NewsFeedScreen';
import OrgChartScreen from '../screens/org-chart/OrgChartScreen';
import SearchScreen from '../screens/search/SearchScreen';
import TeamDetailsScreen from '../screens/org-chart/TeamDetailsScreen';
import { navigationRef } from './rootNavigation';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ROUTES.LOGIN}
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F8F9FB' },
        }}
      >
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.FILES} component={FilesScreen} />
        <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
        <Stack.Screen name={ROUTES.CHAT_LIST} component={ChatListScreen} />
        <Stack.Screen name={ROUTES.CONVERSATION} component={ConversationScreen} />
        <Stack.Screen name={ROUTES.CONTENT_FEED} component={ContentFeedScreen} />
        <Stack.Screen name={ROUTES.CONTENT_DETAILS} component={ContentDetailsScreen} />
        <Stack.Screen name={ROUTES.NEWS_FEED} component={NewsFeedScreen} />
        <Stack.Screen name={ROUTES.NEWS_DETAILS} component={NewsDetailsScreen} />
        <Stack.Screen name={ROUTES.ORG_CHART} component={OrgChartScreen} />
        <Stack.Screen name={ROUTES.TEAM_DETAILS} component={TeamDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
