import { View } from 'react-native';

import AppText from '../components/AppText';
import AuthCard from '../components/AuthCard';
import BrandHeader from '../components/BrandHeader';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Screen from '../components/Screen';
import TextField from '../components/TextField';
import { ROUTES } from '../constants/routes';
import { useLoginForm } from '../hooks/useLoginForm';
import { useResponsive } from '../hooks/useResponsive';

export default function LoginScreen({ navigation }) {
  const form = useLoginForm();
  const { compact } = useResponsive();

  const handleSubmit = () => {
    form.submit();
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <Screen contentClassName={compact ? 'min-h-[840px]' : 'min-h-[965px]'}>
      <View className="pt-[61px]">
        <BrandHeader />
      </View>

      <View className="mt-[18px]">
        <AppText className="text-hero font-bold text-ink">BrightNow</AppText>
        <AppText className="-mt-[1px] text-[15px] font-bold uppercase leading-[19px] tracking-[4.6px] text-silver">
          BRIGHT DIGITAL
        </AppText>
      </View>

      <AppText className="mt-[34px] text-body font-normal text-[#606A75]">
        Access your curated editorial workspace.{'\n'}
        Securely manage communications, internal{'\n'}
        resources, and project documentation{'\n'}
        from a single unified hub.
      </AppText>

      <View className="mt-[34px]">
        <AuthCard>
          <AppText className="text-title font-bold text-charcoal">Sign In</AppText>
          <AppText className="mt-[8px] text-copy text-muted">
            Please enter your credentials to{'\n'}continue.
          </AppText>

          <TextField
            className="mt-[42px]"
            label="Corporate Email"
            value={form.email}
            onChangeText={form.setEmail}
            placeholder="name@brightnow.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <TextField
            className="mt-[26px]"
            label="Password"
            actionLabel="Forgot?"
            value={form.password}
            onChangeText={form.setPassword}
            placeholder="••••••••"
            secureTextEntry
            textContentType="password"
          />

          <Checkbox
            className="mt-[33px]"
            checked={form.keepSignedIn}
            label="Keep me signed in"
            onChange={form.setKeepSignedIn}
          />

          <Button
            className="mt-[42px] w-full"
            title="Continue to Workspace  →"
            onPress={handleSubmit}
          />
        </AuthCard>
      </View>

      <View className="h-[15px] flex-row items-center justify-between pb-[31px] pt-[18px]">
        <AppText className="text-tiny font-bold uppercase text-silver">© 2026 BRIGHT DIGITAL</AppText>
        <View className="flex-row">
          <AppText className="text-tiny font-bold uppercase text-silver">HELP</AppText>
          <AppText className="ml-[27px] text-tiny font-bold uppercase text-silver">PRIVACY</AppText>
        </View>
      </View>
    </Screen>
  );
}
