import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import AppText from '../../AppText';

function ParagraphSection({ section }) {
  return (
    <View className="mt-[48px] flex-row">
      {section.dropCap ? (
        <AppText className="w-[47px] pt-[3px] text-[19px] leading-[30px] text-[#20242A]">{section.dropCap}</AppText>
      ) : null}
      <AppText className="flex-1 text-[19px] leading-[30px] text-[#20242A]">{section.body}</AppText>
    </View>
  );
}

function BodySection({ section }) {
  return (
    <View className="mt-[42px]">
      <AppText className="text-[25px] font-bold leading-[31px] text-[#20242A]">{section.heading}</AppText>
      <AppText className="mt-[27px] text-[19px] leading-[30px] text-[#20242A]">{section.body}</AppText>
    </View>
  );
}

function QuoteSection({ section }) {
  return (
    <View className="mt-[31px] overflow-hidden rounded-[10px] bg-[#F0F1F3]">
      <View className="border-l-[3px] border-homeBlue px-[34px] py-[32px]">
        <AppText className="text-[18px] leading-[29px] text-[#4C5665]">{section.body}</AppText>
      </View>
    </View>
  );
}

function ChecklistSection({ section }) {
  return (
    <View className="mt-[36px]">
      {section.items.map((item) => (
        <View className="mb-[27px] flex-row" key={item}>
          <View className="mt-[4px] h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-homeBlue">
            <Feather name="check" size={13} color="#0B5CD7" />
          </View>
          <AppText className="ml-[13px] flex-1 text-[18px] leading-[29px] text-[#20242A]">{item}</AppText>
        </View>
      ))}
    </View>
  );
}

export default function NewsContent({ sections }) {
  return (
    <View className="mt-[45px] border-t border-[#EEF0F3] pt-[6px]">
      {sections.map((section) => {
        if (section.type === 'paragraph') {
          return <ParagraphSection key={section.id} section={section} />;
        }

        if (section.type === 'quote') {
          return <QuoteSection key={section.id} section={section} />;
        }

        if (section.type === 'checklist') {
          return <ChecklistSection key={section.id} section={section} />;
        }

        return <BodySection key={section.id} section={section} />;
      })}
    </View>
  );
}
