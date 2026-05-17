import { View } from 'react-native';

export default function OnlineStatus({ online }) {
  return (
    <View
      className={`absolute bottom-[2px] right-[1px] h-[10px] w-[10px] rounded-full border-2 border-white ${
        online ? 'bg-[#176BEF]' : 'bg-[#A8B2BC]'
      }`}
    />
  );
}
