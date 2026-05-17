import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import AppText from '../AppText';
import FileTypeBadge from './FileTypeBadge';

export default function FileCard({ file, onFavorite, onPreview }) {
  return (
    <Pressable className="mb-[14px] w-[48%] rounded-[10px] bg-white px-[14px] py-[16px]" onPress={() => onPreview?.(file)}>
      <View className="mb-[18px] flex-row items-start justify-between">
        <View className="h-[46px] w-[46px] items-center justify-center rounded-[9px] bg-[#F3F7FF]">
          <Feather name="file-text" size={22} color="#0B5CD7" />
        </View>
        <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={() => onFavorite?.(file.id)}>
          <Feather name="star" size={18} color={file.favorite ? '#E85D04' : '#AEB5BD'} />
        </Pressable>
      </View>
      <AppText className="min-h-[40px] text-[14px] font-bold leading-[20px] text-charcoal" numberOfLines={2}>
        {file.title}
      </AppText>
      <View className="mt-[12px] flex-row items-center justify-between">
        <FileTypeBadge type={file.type} />
        <AppText className="text-[12px] leading-[15px] text-muted">{file.sizeMb} MB</AppText>
      </View>
    </Pressable>
  );
}
