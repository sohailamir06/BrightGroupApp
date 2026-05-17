import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function SearchInput({ value, onChangeText, onClear }) {
  return (
    <View className="h-[98px] flex-row items-center rounded-searchCard bg-searchInput px-[20px]">
      <Feather name="search" size={24} color={colors.silver} />
      <TextInput
        className="ml-[18px] flex-1 text-[18px] leading-[23px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search people, news, or documents"
        placeholderTextColor={colors.silver}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value ? (
        <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={onClear}>
          <Feather name="x" size={22} color={colors.muted} />
        </Pressable>
      ) : null}
    </View>
  );
}
