import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function MessageInput({ value, onChangeText, onSend }) {
  return (
    <View className="flex-row items-center border-t border-[#AAB3B926] bg-white px-[14px] py-[12px]">
      <Pressable className="h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EEF3F8]">
        <Feather name="paperclip" size={20} color="#5D6B7A" />
      </Pressable>
      <TextInput
        className="mx-[10px] min-h-[42px] flex-1 rounded-full bg-[#EEF3F8] px-[16px] py-[10px] text-[15px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Message..."
        placeholderTextColor={colors.silver}
        multiline
      />
      <Pressable className="h-[42px] w-[42px] items-center justify-center rounded-full bg-homeBlue" onPress={onSend}>
        <Feather name="send" size={18} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
