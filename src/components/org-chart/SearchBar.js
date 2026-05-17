import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

export default function SearchBar({ value, onChangeText, onClear }) {
  return (
    <View className="h-[42px] flex-row items-center rounded-[8px] border border-[#D8DCE5] bg-white px-[13px]">
      <Feather name="search" size={15} color="#9CA7B3" />
      <TextInput
        className="ml-[10px] flex-1 text-[12px] leading-[15px] text-charcoal"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search by name, role, or skill..."
        placeholderTextColor="#B5BDC7"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value ? (
        <Pressable onPress={onClear}>
          <Feather name="x" size={16} color="#9CA7B3" />
        </Pressable>
      ) : null}
    </View>
  );
}
