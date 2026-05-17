import { Pressable, View } from 'react-native';

import { uiActions, useUiStore } from '../../store/ui/uiStore';
import AppText from '../AppText';

export default function ToastHost() {
  const ui = useUiStore();

  if (!ui.toast) {
    return null;
  }

  return (
    <View className="absolute bottom-[26px] left-0 right-0 z-50 items-center px-[24px]">
      <Pressable
        className="w-full max-w-[342px] rounded-[10px] bg-charcoal px-[18px] py-[14px] shadow-soft"
        onPress={uiActions.hideToast}
      >
        <AppText className="text-[14px] font-semibold leading-[19px] text-white">{ui.toast.title}</AppText>
        {ui.toast.body ? (
          <AppText className="mt-[3px] text-[13px] leading-[18px] text-[#DDE5EC]">{ui.toast.body}</AppText>
        ) : null}
      </Pressable>
    </View>
  );
}
