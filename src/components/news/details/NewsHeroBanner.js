import { Image, View } from 'react-native';

export default function NewsHeroBanner({ image }) {
  return (
    <View className="h-[318px] w-full bg-[#DDE5EC]">
      <Image className="h-full w-full" source={{ uri: image }} />
    </View>
  );
}
