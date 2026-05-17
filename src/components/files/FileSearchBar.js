import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function FileSearchBar({ value, onChangeText, onClear }) {
  return (
    <View className="h-[56px] flex-row items-center rounded-[10px] bg-white px-[16px]">
      <Feather name="search" size={21} color={colors.muted} />
      <TextInput
        className="ml-[14px] flex-1 text-[16px] leading-[20px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search files and documents..."
        placeholderTextColor={colors.silver}
        returnKeyType="search"
      />
      {value ? (
        <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={onClear}>
          <Feather name="x" size={20} color={colors.muted} />
        </Pressable>
      ) : null}
    </View>
  );
}
