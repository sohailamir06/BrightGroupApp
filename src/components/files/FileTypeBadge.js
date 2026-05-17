import { View } from 'react-native';

import AppText from '../AppText';

const typeTone = {
  pdf: 'bg-[#FFE1E1] text-[#A32626]',
  doc: 'bg-[#F3F7FF] text-homeBlue',
  xls: 'bg-[#E7F8EF] text-[#168A5B]',
  ppt: 'bg-[#FFF0DE] text-[#B95714]',
};

export default function FileTypeBadge({ type }) {
  const tone = typeTone[type] || 'bg-[#EEF3F8] text-muted';

  return (
    <View className={`rounded-[6px] px-[8px] py-[4px] ${tone.split(' ')[0]}`}>
      <AppText className={`text-[10px] font-bold uppercase leading-[12px] ${tone.split(' ')[1]}`}>
        {type}
      </AppText>
    </View>
  );
}
