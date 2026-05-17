# BrightNow Mobile

Production-ready Expo + React Native + JavaScript + NativeWind starter implementing the provided BrightNow login screen.

## Folder Structure

```text
src/
  assets/
  components/
  constants/
  hooks/
  navigation/
  screens/
  services/
  store/
  types/
  utils/
```

## Setup

```bash
npm install
npm run start
```

If creating from scratch instead of using this repository:

```bash
npx create-expo-app brightnow-mobile --template blank
cd brightnow-mobile
npm install nativewind tailwindcss @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-reanimated expo-status-bar
npm install -D prettier-plugin-tailwindcss eslint
```

## Run

```bash
npm run ios
npm run android
npm run web
```

NativeWind is configured through `tailwind.config.js`, `babel.config.js`, `metro.config.js`, and `global.css`.

## Android Setup On Windows

`npm run android` requires the Android SDK and `adb`. If you see:

```text
Failed to resolve the Android SDK path
'adb' is not recognized
```

Install Android Studio, then install these SDK tools from `Settings > Languages & Frameworks > Android SDK`:

```text
Android SDK Platform
Android SDK Platform-Tools
Android Emulator
Android SDK Build-Tools
```

Use the default SDK location when possible:

```text
C:\Users\user\AppData\Local\Android\Sdk
```

Then set Windows environment variables:

```powershell
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LOCALAPPDATA\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "$env:LOCALAPPDATA\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";$env:LOCALAPPDATA\Android\Sdk\platform-tools", "User")
```

Close and reopen PowerShell, then verify:

```powershell
adb version
npm run android
```

If you do not want to install Android Studio, run Metro with `npm run start` and open the app in Expo Go by scanning the QR code from a physical device.
