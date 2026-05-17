import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';

const tone = {
  blue: ['bg-[#E7F0FF]', '#0B5CD7'],
  orange: ['bg-[#F5ECE5]', '#B95714'],
  indigo: ['bg-[#E8EFFF]', '#245AAE'],
  cyan: ['bg-[#DFF2FF]', '#0078D4'],
};

export default function FeaturedContentCard({ category, onPress }) {
  const [bgClass, iconColor] = tone[category.tone] || tone.blue;

  return (
    <Pressable className="mb-[27px] h-[193px] rounded-[14px] bg-white px-[32px] pt-[32px] shadow-soft" onPress={() => onPress?.(category)}>
      <View className={`h-[48px] w-[48px] items-center justify-center rounded-full ${bgClass}`}>
        <Feather name={category.icon} size={23} color={iconColor} />
      </View>
      <AppText className="mt-[30px] text-[17px] font-bold leading-[21px] text-charcoal">
        {category.title}
      </AppText>
      <AppText className="mt-[13px] text-[16px] leading-[20px] text-[#495364]">
        {category.countLabel}
      </AppText>
    </Pressable>
  );
}
