import { Pressable, ScrollView, View } from 'react-native';

import { homeFilterMap } from '../../utils/home/homeFilters';

import AppText from '../AppText';

export default function FilterChips({ filters, activeFilters = {}, onToggle }) {
  return (
    <View>
      <AppText className="text-[10px] font-bold uppercase leading-[12px] tracking-[1.6px] text-silver">
        REFINE RESULTS
      </AppText>
      <ScrollView className="mt-[17px]" horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => (
          <Pressable
            className={`mr-[8px] rounded-full px-[17px] py-[9px] ${
              activeFilters[homeFilterMap[filter]] ? 'bg-action' : 'bg-chip'
            }`}
            key={filter}
            onPress={() => onToggle?.(homeFilterMap[filter])}
          >
            <AppText
              className={`text-[12px] leading-[15px] ${
                activeFilters[homeFilterMap[filter]] ? 'font-bold text-homeBlue' : 'text-charcoal'
              }`}
            >
              {filter}
            </AppText>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
