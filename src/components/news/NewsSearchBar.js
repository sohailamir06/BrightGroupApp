import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

export default function NewsSearchBar({ value, onChangeText, onClear }) {
  return (
    <View className="h-[46px] flex-row items-center rounded-[12px] bg-white px-[14px]">
      <Feather name="search" size={18} color="#8797AA" />
      <TextInput
        className="ml-[10px] h-full flex-1 text-[14px] leading-[18px] text-charcoal outline-none"
        onChangeText={onChangeText}
        placeholder="Search announcements"
        placeholderTextColor="#A5ADB6"
        value={value}
      />
      {value ? (
        <Pressable className="h-[28px] w-[28px] items-center justify-center" onPress={onClear}>
          <Feather name="x" size={17} color="#8797AA" />
        </Pressable>
      ) : null}
    </View>
  );
}
