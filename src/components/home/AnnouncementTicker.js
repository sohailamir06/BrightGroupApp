import { View } from 'react-native';

import { homeLabels } from '../../constants/homeLabels';
import AppText from '../AppText';

export default function AnnouncementTicker() {
  return (
    <View className="h-[42px] w-full justify-center border-y border-[#004BBC33] bg-homeBlueSoft pl-[16px]">
      <AppText
        className="text-[12px] font-bold uppercase leading-[16px] tracking-[2.6px] text-ink"
        numberOfLines={1}
      >
        {homeLabels.ticker}
      </AppText>
    </View>
  );
}
