import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { homeLabels } from '../../constants/homeLabels';
import AppText from '../AppText';

export default function InfoCard({ insight }) {
  return (
    <View className="rounded-homePanel border border-[#CFE0FF] bg-[#E8F0FF] px-[24px] py-[25px]">
      <View className="flex-row items-center">
        <Feather name="award" size={17} color="#5D6B7A" />
        <AppText className="ml-[8px] text-[14px] font-bold leading-[17px] text-[#66717F]">
          {insight.title}
        </AppText>
      </View>
      <AppText className="mt-[16px] text-[13px] leading-[20px] text-[#536174]">
        {insight.body}
      </AppText>
      <AppText className="mt-[20px] text-[11px] font-bold uppercase leading-[13px] tracking-[1px] text-[#647083]">
        {homeLabels.learnMore}
      </AppText>
    </View>
  );
}
