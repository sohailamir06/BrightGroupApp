import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { bottomTabs } from '../../constants/homeLabels';
import { cn } from '../../utils/classNames';
import AppText from '../AppText';

export default function BottomNavigation({ activeKey = 'home', onTabPress, variant = 'default' }) {
  const isSearchVariant = variant === 'search';
  const isChatVariant = variant === 'chat';
  const isContentVariant = variant === 'content';
  const isOrgVariant = variant === 'org';
  const isNewsVariant = variant === 'news';
  const usesRoundedVariant = isSearchVariant || isChatVariant || isContentVariant || isOrgVariant || isNewsVariant;

  return (
    <View
      className={cn(
        'w-full flex-row items-start justify-between border-t border-[#AAB3B926] bg-[#FFFFFFF2] pb-[24px] pt-[12px] shadow-topBar',
        usesRoundedVariant
          ? cn(
              isOrgVariant ? 'rounded-t-[20px] px-[29px]' : 'rounded-t-bottomNav px-[16px]',
              isChatVariant ? 'h-[83px]' : isContentVariant || isNewsVariant ? 'h-[101px]' : isOrgVariant ? 'h-[88px]' : 'h-[86px]',
            )
          : 'h-navH px-[30px]',
      )}
    >
      {bottomTabs.map((tab) => {
        const active = tab.key === activeKey;

        return (
          <Pressable
            className={cn(
              'min-w-[48px] items-center',
              usesRoundedVariant && active && !isNewsVariant ? 'min-w-[72px] rounded-[10px] bg-[#D9E5FF] px-[10px] py-[7px]' : '',
            )}
            key={tab.key}
            onPress={() => onTabPress?.(tab.key)}
          >
            <Feather name={tab.icon} size={22} color={active ? '#0B5CD7' : '#8797AA'} />
            <AppText variant="nav" className={`mt-[4px] ${active ? 'text-homeBlue' : 'text-[#8797AA]'}`}>
              {tab.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}
