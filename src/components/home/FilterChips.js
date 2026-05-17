import { View } from 'react-native';

import AppText from '../AppText';

export default function FilterChips({ filters }) {
  return (
    <View>
      <AppText className="text-[10px] font-bold uppercase leading-[12px] tracking-[1.6px] text-silver">
        REFINE RESULTS
      </AppText>
      <View className="mt-[17px] flex-row flex-wrap">
        {filters.map((filter) => (
          <View className="mb-[10px] mr-[8px] rounded-full bg-chip px-[17px] py-[9px]" key={filter}>
            <AppText className="text-[12px] leading-[15px] text-charcoal">{filter}</AppText>
          </View>
        ))}
      </View>
    </View>
  );
}
