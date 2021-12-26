import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Box } from 'native-base';

import AppProviders from '@/components/templates/AppProviders';

export default function App() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <Box flex="1" alignItems="center" justifyContent="center" safeArea>
        Hello World
      </Box>
    </AppProviders>
  );
}
