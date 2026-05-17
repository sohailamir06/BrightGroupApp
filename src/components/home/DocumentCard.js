import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../AppText';

export default function DocumentCard({ item, className }) {
  const isPdf = item.type === 'pdf';

  return (
    <View className={`h-[80px] flex-row items-center rounded-homeCard bg-homeCard px-[16px] ${className || ''}`}>
      <View
        className={`h-[48px] w-[48px] items-center justify-center rounded-[8px] ${
          isPdf ? 'bg-[#FFE1E1]' : 'bg-[#F3F7FF]'
        }`}
      >
        <Feather name="file-text" size={22} color={isPdf ? '#A32626' : '#0B5CD7'} />
      </View>
      <View className="ml-[16px] flex-1">
        <AppText className="text-[15px] font-bold leading-[18px] text-charcoal" numberOfLines={1}>
          {item.title}
        </AppText>
        <AppText className="mt-[4px] text-[10px] font-bold uppercase leading-[12px] tracking-[1px] text-muted">
          {item.meta}
        </AppText>
      </View>
    </View>
  );
}
