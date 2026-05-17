import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../../AppText';

export default function AttachmentCard({ attachment }) {
  return (
    <View className="mb-[10px] flex-row items-center rounded-[10px] bg-white px-[14px] py-[13px]">
      <View className="h-[36px] w-[36px] items-center justify-center rounded-full bg-[#E8F0FF]">
        <Feather name={attachment.type === 'pdf' ? 'file-text' : 'paperclip'} size={17} color="#0B5CD7" />
      </View>
      <View className="ml-[12px] flex-1">
        <AppText className="text-[14px] font-semibold leading-[18px] text-charcoal">{attachment.title}</AppText>
        <AppText className="mt-[2px] text-[12px] leading-[15px] text-muted">{attachment.size}</AppText>
      </View>
      <Feather name="download" size={18} color="#8797AA" />
    </View>
  );
}
