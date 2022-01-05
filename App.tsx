import React from 'react';

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import AppProviders from './src/components/templates/AppProviders';

import Routers from '@/routes';

function App() {
  const [isFontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProviders>
      <StatusBar style="light" />
      <Routers />
    </AppProviders>
  );
}

export default App;
