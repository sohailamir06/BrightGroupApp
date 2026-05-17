import { Pressable, View } from 'react-native';

import AppText from '../AppText';

export default function TeamPreviewCard({ onPress }) {
  return (
    <View className="rounded-[14px] bg-action px-[24px] py-[30px] shadow-button">
      <AppText className="text-center text-[24px] font-bold leading-[28px] text-ink">
        Can’t find who{'\n'}you’re looking{'\n'}for?
      </AppText>
      <AppText className="mt-[16px] text-center text-[13px] leading-[18px] text-[#536070]">
        Our specialized matching{'\n'}team can help you identify{'\n'}the right person for your{'\n'}specific project needs.
      </AppText>
      <Pressable className="mt-[20px] h-[42px] items-center justify-center rounded-[7px] bg-white shadow-soft" onPress={onPress}>
        <AppText className="text-[12px] font-bold text-ink">Open Help Desk</AppText>
      </Pressable>
    </View>
  );
}
