import { View } from 'react-native';

import AppText from '../../AppText';

export default function CommentPreview({ comments }) {
  if (!comments?.length) {
    return null;
  }

  return (
    <View className="mt-[24px] rounded-[10px] bg-white px-[18px] py-[16px]">
      <AppText className="text-[16px] font-bold leading-[21px] text-[#20242A]">Comments</AppText>
      <AppText className="mt-[8px] text-[14px] leading-[20px] text-[#4C5665]" numberOfLines={2}>
        {comments[0]}
      </AppText>
    </View>
  );
}
