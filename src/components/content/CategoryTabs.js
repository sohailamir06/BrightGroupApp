import { Pressable, ScrollView } from 'react-native';

import AppText from '../AppText';

export default function CategoryTabs({ categories, activeId, onChange }) {
  const tabs = [{ id: 'all', title: 'All' }, ...categories];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tabs.map((category) => {
        const active = category.id === activeId;

        return (
          <Pressable
            className={`mr-[10px] rounded-full px-[17px] py-[9px] ${
              active ? 'bg-action' : 'bg-white'
            }`}
            key={category.id}
            onPress={() => onChange?.(category.id)}
          >
            <AppText className={`text-[13px] font-semibold ${active ? 'text-homeBlue' : 'text-muted'}`}>
              {category.title}
            </AppText>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
