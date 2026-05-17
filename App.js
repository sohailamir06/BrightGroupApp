import './global.css';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation/RootNavigator';
import { SidebarProvider } from './src/hooks/sidebar/useSidebar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SidebarProvider>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <RootNavigator />
      </SidebarProvider>
    </SafeAreaProvider>
  );
}
