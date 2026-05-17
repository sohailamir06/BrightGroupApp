import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function MessageInput({ value, onChangeText, onSend }) {
  return (
    <View className="flex-row items-center border-t border-[#AAB3B926] bg-white px-[24px] py-[16px]">
      <View className="min-h-[56px] flex-1 flex-row items-center rounded-[10px] bg-chatInput px-[17px]">
        <TextInput
          className="min-h-[48px] flex-1 py-[12px] text-[16px] leading-[20px] text-charcoal"
          value={value}
          onChangeText={onChangeText}
          placeholder="Type your message..."
          placeholderTextColor={colors.silver}
          multiline
        />
        <Feather name="smile" size={21} color="#5D6B7A" />
      </View>
      <Pressable
        className="ml-[16px] h-[56px] w-[50px] items-center justify-center rounded-[10px] bg-action shadow-button"
        onPress={onSend}
      >
        <Feather name="send" size={22} color="#0A124B" />
      </Pressable>
    </View>
  );
}
