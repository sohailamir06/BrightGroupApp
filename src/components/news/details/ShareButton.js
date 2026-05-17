import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function ShareButton({ onPress }) {
  return (
    <Pressable className="h-[40px] w-[40px] items-center justify-center" onPress={onPress}>
      <Feather name="share-2" size={22} color="#111827" />
    </Pressable>
  );
}
