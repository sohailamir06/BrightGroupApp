import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { formatFileDate } from '../../utils/files/fileFilters';
import AppText from '../AppText';
import FileTypeBadge from './FileTypeBadge';

export default function FileListItem({ file, onFavorite, onPreview }) {
  return (
    <Pressable className="mb-[12px] flex-row items-center rounded-[10px] bg-white px-[16px] py-[16px]" onPress={() => onPreview?.(file)}>
      <View className="h-[48px] w-[48px] items-center justify-center rounded-[9px] bg-[#F3F7FF]">
        <Feather name="file-text" size={22} color="#0B5CD7" />
      </View>
      <View className="ml-[14px] flex-1">
        <View className="flex-row items-center">
          <AppText className="flex-1 text-[15px] font-bold leading-[19px] text-charcoal" numberOfLines={1}>
            {file.title}
          </AppText>
          <FileTypeBadge type={file.type} />
        </View>
        <AppText className="mt-[5px] text-[12px] leading-[16px] text-muted">
          {file.owner} • {formatFileDate(file.updatedAt)} • {file.sizeMb} MB
        </AppText>
      </View>
      <Pressable className="ml-[10px] h-[36px] w-[36px] items-center justify-center" onPress={() => onFavorite?.(file.id)}>
        <Feather name="star" size={19} color={file.favorite ? '#E85D04' : '#AEB5BD'} />
      </Pressable>
    </Pressable>
  );
}
