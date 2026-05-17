import { useRef } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../../components/AppText';
import ConversationHeader from '../../components/chat/ConversationHeader';
import MessageBubble from '../../components/chat/MessageBubble';
import MessageInput from '../../components/chat/MessageInput';
import TypingIndicator from '../../components/chat/TypingIndicator';
import { useConversation } from '../../hooks/chat/useConversation';

export default function ConversationScreen({ navigation, route }) {
  const conversation = useConversation(route.params?.conversationId);
  const listRef = useRef(null);

  return (
    <SafeAreaView className="flex-1 items-center bg-canvas">
      <KeyboardAvoidingView
        className="w-full max-w-[390px] flex-1 bg-canvas"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ConversationHeader user={conversation.participant} onBack={navigation.goBack} />
        <FlatList
          ref={listRef}
          className="flex-1"
          contentContainerClassName="px-[24px] pb-[22px] pt-[41px]"
          data={conversation.messages}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <View className="mb-[40px] items-center">
              <View className="rounded-full bg-[#EEF2F6] px-[16px] py-[7px]">
                <AppText className="text-[12px] font-medium uppercase leading-[14px] tracking-[0.4px] text-[#5F6B78]">
                  Today
                </AppText>
              </View>
            </View>
          }
          ListFooterComponent={
            <View className="items-start">
              <TypingIndicator visible={conversation.isTyping} />
            </View>
          }
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => <MessageBubble message={item} />}
          showsVerticalScrollIndicator={false}
        />
        <MessageInput
          value={conversation.draft}
          onChangeText={conversation.setDraft}
          onSend={conversation.sendMessage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
