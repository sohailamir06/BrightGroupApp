import { View } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';

export default function WorkspaceScreen() {
  return (
    <Screen contentClassName="min-h-screen justify-center">
      <View className="flex-1 items-center justify-center">
        <AppText className="text-title font-bold text-ink">Workspace</AppText>
        <AppText className="mt-2 text-copy text-muted">Authenticated route placeholder.</AppText>
      </View>
    </Screen>
  );
}
