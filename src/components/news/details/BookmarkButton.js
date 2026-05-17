import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function BookmarkButton({ active, onPress }) {
  return (
    <Pressable className="h-[40px] w-[40px] items-center justify-center" onPress={onPress}>
      <Feather name="bookmark" size={22} color={active ? '#0B5CD7' : '#111827'} />
    </Pressable>
  );
}
