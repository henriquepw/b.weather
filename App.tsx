import React from 'react';

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import AppProviders from './src/components/templates/AppProviders';

import RequestLocationPermission from '@/components/screens/RequestLocationPermission';

function App() {
  const [isFontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProviders>
      <StatusBar style="light" />
      <RequestLocationPermission />
    </AppProviders>
  );
}

export default App;
