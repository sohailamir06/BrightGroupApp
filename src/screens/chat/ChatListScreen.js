import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../../components/home/BottomNavigation';
import AppText from '../../components/AppText';
import ChatCard from '../../components/chat/ChatCard';
import ChatEmptyState from '../../components/chat/ChatEmptyState';
import ChatHeader from '../../components/chat/ChatHeader';
import ChatLoadingSkeleton from '../../components/chat/ChatLoadingSkeleton';
import ChatSearchBar from '../../components/chat/ChatSearchBar';
import { ROUTES } from '../../constants/routes';
import { useChatList } from '../../hooks/chat/useChatList';

export default function ChatListScreen({ navigation }) {
  const chat = useChatList();

  const handleTabPress = (tabKey) => {
    if (tabKey === 'home') {
      navigation.navigate(ROUTES.HOME);
    }
    if (tabKey === 'search') {
      navigation.navigate(ROUTES.SEARCH);
    }
    if (tabKey === 'content') {
      navigation.navigate(ROUTES.CONTENT_FEED);
    }
    if (tabKey === 'org') {
      navigation.navigate(ROUTES.ORG_CHART);
    }
  };

  const openConversation = (conversation) => {
    navigation.navigate(ROUTES.CONVERSATION, { conversationId: conversation.id });
  };

  const renderHeader = () => (
    <View className="px-[16px] pb-[31px] pt-[32px]">
      <AppText className="text-[56px] font-bold leading-[62px] tracking-[-2px] text-charcoal">
        Messages
      </AppText>
      <AppText className="mt-[10px] text-[19px] leading-[30px] text-muted">
        Secure, direct communication with your{'\n'}
        colleagues and partners across the digital{'\n'}
        ecosystem.
      </AppText>
      <View className="mt-[48px]">
        <ChatSearchBar value={chat.query} onChangeText={chat.setQuery} onClear={chat.clearQuery} />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-canvas">
      <KeyboardAvoidingView
        className="w-full max-w-[390px] flex-1 bg-canvas"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ChatHeader />
        {chat.isLoading ? (
          <View className="px-[16px] pt-[32px]">
            <ChatLoadingSkeleton />
          </View>
        ) : (
          <FlatList
            className="flex-1"
            contentContainerClassName="min-h-[881px] px-[20px] pb-[128px]"
            data={chat.conversations}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={<ChatEmptyState />}
            renderItem={({ item, index }) => (
              <ChatCard
                conversation={item}
                highlighted={index === 0 && !chat.query}
                onPress={openConversation}
                users={chat.users}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
        <BottomNavigation activeKey="chat" onTabPress={handleTabPress} variant="chat" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
