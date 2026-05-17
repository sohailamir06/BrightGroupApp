import { View } from 'react-native';

import AppText from '../AppText';

export default function SidebarProfileCard({ profile }) {
  return (
    <View className="px-[32px] pt-[45px]">
      <View className="h-[80px] w-[80px] items-center justify-center rounded-[16px] bg-white shadow-soft">
        <View className="h-[36px] w-[36px] rounded-full bg-[#F4C38E]" />
        <View className="-mt-[3px] h-[35px] w-[44px] rounded-t-[18px] bg-[#2E86A6]" />
        <View className="absolute top-[12px] h-[24px] w-[42px] rounded-t-full bg-[#242934]" />
        <View className="absolute top-[34px] h-[16px] w-[2px] bg-ink" />
      </View>
      <AppText className="mt-[20px] text-[22px] font-bold leading-[27px] text-homeBlue">
        {profile.name}
      </AppText>
      <AppText className="mt-[5px] text-[15px] leading-[19px] text-[#536070]">{profile.role}</AppText>
      <View className="mt-[9px] self-start flex-row items-center rounded-full bg-[#DCE8FF] px-[12px] py-[7px]">
        <View className="h-[6px] w-[6px] rounded-full bg-homeBlue" />
        <AppText className="ml-[8px] text-[12px] font-bold uppercase leading-[14px] tracking-[0.7px] text-[#355B9C]">
          {profile.status}
        </AppText>
      </View>
    </View>
  );
}
