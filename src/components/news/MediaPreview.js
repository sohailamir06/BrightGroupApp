import { Feather } from '@expo/vector-icons';
import { Image, View } from 'react-native';

export default function MediaPreview({ item, large = false, roundedTop = false }) {
  if (item?.image) {
    return (
      <Image
        className={`${large ? 'h-[213px] w-full' : 'h-[58px] w-[58px]'} ${
          roundedTop ? 'rounded-t-[14px]' : large ? 'rounded-[16px]' : 'rounded-[12px]'
        }`}
        source={{ uri: item.image }}
      />
    );
  }

  return (
    <View
      className={`${large ? 'h-[213px] w-full' : 'h-[58px] w-[58px]'} ${
        roundedTop ? 'rounded-t-[14px]' : large ? 'rounded-[16px]' : 'rounded-[12px]'
      } items-center justify-center bg-[#26383B]`}
    >
      <Feather name={item?.mediaType === 'image' ? 'image' : 'file-text'} size={large ? 32 : 18} color="#FFFFFF" />
    </View>
  );
}
