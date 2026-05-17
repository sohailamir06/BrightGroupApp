import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

import { colors } from '../../constants/theme';

export default function SearchBar({ value, onChangeText, placeholder = 'Search workspace' }) {
  return (
    <View className="h-[44px] flex-row items-center rounded-full bg-field px-[16px]">
      <Feather name="search" size={18} color={colors.muted} />
      <TextInput
        className="ml-[10px] flex-1 text-[14px] leading-[18px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.silver}
      />
    </View>
  );
}
