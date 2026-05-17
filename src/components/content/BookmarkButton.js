import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function BookmarkButton({ active, onPress }) {
  return (
    <Pressable className="h-[36px] w-[36px] items-center justify-center rounded-full bg-white" onPress={onPress}>
      <Feather name="bookmark" size={19} color={active ? '#0B5CD7' : '#6B7785'} />
    </Pressable>
  );
}
