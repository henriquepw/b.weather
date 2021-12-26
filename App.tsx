import React from 'react';

import { StatusBar } from 'expo-status-bar';

import AppProviders from './src/components/templates/AppProviders';

import Home from './src/components/screens/Home';

function App() {
  return (
    <AppProviders>
      <StatusBar style="light" />
      <Home />
    </AppProviders>
  );
}

export default App;
