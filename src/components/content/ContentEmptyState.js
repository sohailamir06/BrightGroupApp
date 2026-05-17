import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function ContentEmptyState() {
  return (
    <View className="items-center rounded-[14px] bg-white px-[24px] py-[34px]">
      <Feather name="folder" size={30} color="#0B5CD7" />
      <AppText className="mt-[14px] text-[18px] font-bold text-charcoal">No content found</AppText>
      <AppText className="mt-[7px] text-center text-[14px] leading-[20px] text-muted">
        Try another search term or content category.
      </AppText>
    </View>
  );
}
