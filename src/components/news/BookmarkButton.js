import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function BookmarkButton({ active, onPress, soft = false }) {
  return (
    <Pressable
      className={`${soft ? 'bg-[#EEF4FF]' : 'bg-white'} h-[36px] w-[36px] items-center justify-center rounded-full`}
      onPress={onPress}
    >
      <Feather name="bookmark" size={18} color={active ? '#0B5CD7' : '#6B7785'} />
    </Pressable>
  );
}
