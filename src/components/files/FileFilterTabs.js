import { Pressable, ScrollView } from 'react-native';

import AppText from '../AppText';

export default function FileFilterTabs({ items, activeId, onChange }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item) => {
        const active = item.id === activeId;

        return (
          <Pressable
            className={`mr-[10px] rounded-full px-[16px] py-[10px] ${active ? 'bg-action' : 'bg-white'}`}
            key={item.id}
            onPress={() => onChange?.(item.id)}
          >
            <AppText className={`text-[13px] font-semibold leading-[16px] ${active ? 'text-homeBlue' : 'text-charcoal'}`}>
              {item.label}
            </AppText>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
