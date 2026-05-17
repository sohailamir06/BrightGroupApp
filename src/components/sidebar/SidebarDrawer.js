import { useEffect, useRef } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSidebar } from '../../hooks/sidebar/useSidebar';
import { navigate } from '../../navigation/rootNavigation';
import DrawerOverlay from './DrawerOverlay';
import SidebarFooter from './SidebarFooter';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarProfileCard from './SidebarProfileCard';

const visibleMenuItems = [
  { id: 'share-price', label: 'Share Price', icon: 'trending-up' },
  { id: 'faq', label: 'FAQ', icon: 'help-circle' },
  { id: 'meal-plan', label: 'Meal Plan', icon: 'coffee' },
  { id: 'settings', label: 'Settings', icon: 'settings', active: true },
];

export default function SidebarDrawer() {
  const sidebar = useSidebar();
  const translateX = useRef(new Animated.Value(-320)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: sidebar.isOpen ? 0 : -320,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: sidebar.isOpen ? 1 : 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [overlayOpacity, sidebar.isOpen, translateX]);

  const handleItemPress = (item) => {
    if (item.route) {
      navigate(item.route);
      sidebar.closeSidebar();
    }
  };

  return (
    <View
      className={`absolute inset-0 ${sidebar.isOpen ? 'z-50' : 'z-[-1]'}`}
      pointerEvents={sidebar.isOpen ? 'auto' : 'none'}
    >
      <DrawerOverlay opacity={overlayOpacity} onPress={sidebar.closeSidebar} visible={sidebar.isOpen} />
      <Animated.View
        className="h-full w-[320px] overflow-hidden rounded-r-[16px] bg-[#F8F9FA] shadow-soft"
        style={{ transform: [{ translateX }] }}
      >
        <SafeAreaView className="flex-1 bg-[#F8F9FA]">
          <View className="min-h-[884px] flex-1">
            <SidebarProfileCard profile={sidebar.profile} />
            <View className="mt-[51px] px-[24px]">
              {visibleMenuItems.map((item) => (
                <SidebarMenuItem
                  active={item.active}
                  item={item}
                  key={item.id}
                  onPress={handleItemPress}
                />
              ))}
            </View>
            <SidebarFooter
              onLogout={sidebar.closeSidebar}
            />
          </View>
        </SafeAreaView>
      </Animated.View>
      <Pressable className="absolute bottom-0 left-[320px] right-0 top-0" onPress={sidebar.closeSidebar} />
    </View>
  );
}
