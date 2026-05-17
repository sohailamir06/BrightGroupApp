import { Modal, Pressable, View } from 'react-native';

import AppText from './AppText';

export default function ModalShell({ visible, title, children, onClose }) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View className="flex-1 items-center justify-center bg-[#11182766] px-[24px]">
        <Pressable className="absolute inset-0" onPress={onClose} />
        <View className="w-full max-w-[342px] rounded-[14px] bg-white px-[24px] py-[24px] shadow-soft">
          <View className="mb-[18px] flex-row items-center justify-between">
            <AppText className="text-[20px] font-bold leading-[24px] text-charcoal">{title}</AppText>
            <Pressable className="h-[32px] w-[32px] items-center justify-center" onPress={onClose}>
              <AppText className="text-[20px] leading-[24px] text-muted">x</AppText>
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
