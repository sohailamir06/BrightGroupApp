import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function ChatSearchBar({ value, onChangeText, onClear }) {
  return (
    <View className="h-[70px] flex-row items-center rounded-searchCard bg-chatInput px-[16px]">
      <Feather name="search" size={23} color="#75818D" />
      <TextInput
        className="ml-[22px] flex-1 text-[16px] leading-[20px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search conversations..."
        placeholderTextColor={colors.silver}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value ? (
        <Pressable className="h-[30px] w-[30px] items-center justify-center" onPress={onClear}>
          <Feather name="x" size={20} color="#75818D" />
        </Pressable>
      ) : null}
    </View>
  );
}
