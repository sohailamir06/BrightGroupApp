import AppText from '../AppText';

export default function SectionHeader({ title, className }) {
  return (
    <AppText className={`text-[14px] font-normal uppercase leading-[17px] text-[#56616C] ${className || ''}`}>
      {title}
    </AppText>
  );
}
