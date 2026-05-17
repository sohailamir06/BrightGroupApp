import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function ContentSearchBar({ value, onChangeText, onClear }) {
  return (
    <View className="h-[54px] flex-row items-center rounded-full bg-white px-[16px] shadow-soft">
      <Feather name="search" size={22} color="#65727F" />
      <TextInput
        className="ml-[15px] flex-1 text-[16px] leading-[20px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search the Content Hub..."
        placeholderTextColor="#B8C0D8"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value ? (
        <Pressable className="h-[28px] w-[28px] items-center justify-center" onPress={onClear}>
          <Feather name="x" size={19} color={colors.muted} />
        </Pressable>
      ) : null}
    </View>
  );
}
