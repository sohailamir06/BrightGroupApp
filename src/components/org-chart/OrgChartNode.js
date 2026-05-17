import { View } from 'react-native';

import AppText from '../AppText';
import ExpandCollapseButton from './ExpandCollapseButton';

const depthClasses = ['w-0', 'w-[18px]', 'w-[36px]', 'w-[54px]', 'w-[72px]'];

export default function OrgChartNode({ node, depth = 0, expanded, onToggle }) {
  return (
    <View className="mb-[10px]">
      <View className="flex-row items-center">
        <View className={`h-[1px] bg-[#C3C6CF] ${depthClasses[depth] || 'w-[72px]'}`} />
        <View className="flex-row items-center rounded-[10px] bg-white px-[12px] py-[10px]">
          <ExpandCollapseButton expanded={expanded} onPress={() => onToggle?.(node.id)} />
          <AppText className="ml-[10px] text-[13px] font-bold text-charcoal">{node.label}</AppText>
        </View>
      </View>
    </View>
  );
}
