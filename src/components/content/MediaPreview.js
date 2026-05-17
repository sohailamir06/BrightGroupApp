import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const toneClasses = {
  Marketing: 'bg-[#0F2F38]',
  Operations: 'bg-[#50666A]',
  Branding: 'bg-[#26383B]',
};

export default function MediaPreview({ post, large = false }) {
  return (
    <View
      className={`${large ? 'h-[180px] w-full rounded-[18px]' : 'h-[64px] w-[64px] rounded-[14px]'} ${
        toneClasses[post.categoryLabel] || 'bg-[#26383B]'
      } items-center justify-center`}
    >
      <View className={`${large ? 'h-[92px] w-[72px]' : 'h-[38px] w-[31px]'} items-center justify-center rounded-[3px] bg-white`}>
        <Feather name={post.mediaType === 'image' ? 'image' : 'file-text'} size={large ? 30 : 17} color="#60707A" />
      </View>
    </View>
  );
}
