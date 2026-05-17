import { Pressable, ScrollView } from 'react-native';

import AppText from '../AppText';

export default function CategoryTabs({ categories, activeId, onChange }) {
  const tabs = [
    { id: 'all', title: 'All' },
    { id: 'unread', title: 'Unread' },
    { id: 'saved', title: 'Saved' },
    ...categories,
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tabs.map((category) => {
        const active = category.id === activeId;

        return (
          <Pressable
            className={`${active ? 'bg-homeBlue' : 'bg-white'} mr-[10px] rounded-full px-[16px] py-[9px]`}
            key={category.id}
            onPress={() => onChange?.(category.id)}
          >
            <AppText className={`${active ? 'text-white' : 'text-muted'} text-[13px] font-bold leading-[16px]`}>
              {category.title}
            </AppText>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
