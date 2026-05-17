import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export default function FileGridToggle({ value, onChange }) {
  return (
    <View className="flex-row rounded-[9px] bg-[#E8EEF5] p-[3px]">
      {['list', 'grid'].map((mode) => (
        <Pressable
          className={`h-[34px] w-[38px] items-center justify-center rounded-[7px] ${
            value === mode ? 'bg-white' : 'bg-transparent'
          }`}
          key={mode}
          onPress={() => onChange?.(mode)}
        >
          <Feather name={mode === 'list' ? 'list' : 'grid'} size={17} color={value === mode ? '#0B5CD7' : '#68727E'} />
        </Pressable>
      ))}
    </View>
  );
}
