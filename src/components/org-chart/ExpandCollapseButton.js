import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function ExpandCollapseButton({ expanded, onPress }) {
  return (
    <Pressable className="h-[28px] w-[28px] items-center justify-center rounded-full bg-white" onPress={onPress}>
      <Feather name={expanded ? 'minus' : 'plus'} size={16} color="#0B5CD7" />
    </Pressable>
  );
}
