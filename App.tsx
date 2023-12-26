import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RecoilRoot } from 'recoil';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@/navigations/';
import ModalProvider from '@/components/organisms/Modal/ModalProvider';
import CustomToast from '@/components/atoms/Toast/CustomToast';

const fetchFonts = async () => {
  await Font.loadAsync({
    'Pretendard-Regular': require('./assets/fonts/pretendard/Pretendard-Regular.ttf'),
    'Pretendard-Medium': require('./assets/fonts/pretendard/Pretendard-Medium.ttf'),
    'Pretendard-Bold': require('./assets/fonts/pretendard/Pretendard-Bold.ttf'),
    'Pretendard-SemiBold': require('./assets/fonts/pretendard/Pretendard-SemiBold.ttf'),
    'Pretendard-ExtraBold': require('./assets/fonts/pretendard/Pretendard-ExtraBold.ttf'),
    'Mortend-Bold': require('./assets/fonts/mortend/Mortend-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
  });
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoad(true);
      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);

  if (!fontLoad) return null;

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Navigation />
        <ModalProvider />
      </NavigationContainer>
      <Toast config={CustomToast as ToastConfig} />
    </RecoilRoot>
  );
}
