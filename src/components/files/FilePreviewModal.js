import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import ModalShell from '../ModalShell';
import AppText from '../AppText';
import FileTypeBadge from './FileTypeBadge';

export default function FilePreviewModal({ file, visible, onClose, onFavorite }) {
  if (!file) {
    return null;
  }

  return (
    <ModalShell visible={visible} title="File Preview" onClose={onClose}>
      <View className="items-center rounded-[12px] bg-[#F3F7FF] py-[28px]">
        <Feather name="file-text" size={42} color="#0B5CD7" />
      </View>
      <AppText className="mt-[18px] text-[18px] font-bold leading-[23px] text-charcoal">{file.title}</AppText>
      <View className="mt-[10px] flex-row items-center">
        <FileTypeBadge type={file.type} />
        <AppText className="ml-[10px] text-[13px] leading-[17px] text-muted">{file.sizeMb} MB</AppText>
      </View>
      <AppText className="mt-[14px] text-[14px] leading-[21px] text-muted">
        Shared by {file.owner} from {file.team}. Download and share actions are wired as local UI placeholders.
      </AppText>
      <View className="mt-[22px] flex-row">
        <Pressable className="mr-[10px] flex-1 flex-row items-center justify-center rounded-[8px] bg-action py-[12px]">
          <Feather name="download" size={17} color="#0A124B" />
          <AppText className="ml-[7px] text-[14px] font-bold text-ink">Download</AppText>
        </Pressable>
        <Pressable className="mr-[10px] h-[44px] w-[44px] items-center justify-center rounded-[8px] bg-[#EEF3F8]">
          <Feather name="share-2" size={18} color="#0B5CD7" />
        </Pressable>
        <Pressable className="h-[44px] w-[44px] items-center justify-center rounded-[8px] bg-[#EEF3F8]" onPress={() => onFavorite?.(file.id)}>
          <Feather name="star" size={18} color={file.favorite ? '#E85D04' : '#0B5CD7'} />
        </Pressable>
      </View>
    </ModalShell>
  );
}
