import { Feather } from '@expo/vector-icons';
import { Image, View } from 'react-native';

import AppText from '../AppText';

export default function TeammatesCard({ teammates }) {
  return (
    <View className="rounded-homePanel bg-action px-[24px] py-[21px]">
      {teammates.map((member, index) => (
        <View
          className={`flex-row items-center ${index > 0 ? 'mt-[24px]' : ''}`}
          key={member.id}
        >
          <View>
            <Image className="h-[48px] w-[48px] rounded-full border-2 border-white" source={{ uri: member.avatar }} />
            <View
              className={`absolute bottom-[1px] right-[0px] h-[11px] w-[11px] rounded-full border-2 border-white ${
                member.online ? 'bg-[#31C76A]' : 'bg-[#8EA0AA]'
              }`}
            />
          </View>
          <View className="ml-[16px] flex-1">
            <AppText className="text-[14px] font-bold leading-[17px] text-charcoal">
              {member.name}
            </AppText>
            <AppText className="mt-[2px] text-[12px] leading-[15px] text-[#55606C]">
              {member.role.includes('Strategy') ? (
                <>
                  Director of <AppText className="text-[12px] leading-[15px] text-homeBlue">Strategy</AppText>
                </>
              ) : (
                member.role
              )}
            </AppText>
          </View>
          <Feather name="message-square" size={19} color="#0B5CD7" />
        </View>
      ))}
    </View>
  );
}
