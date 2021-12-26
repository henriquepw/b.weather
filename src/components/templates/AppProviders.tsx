import React from 'react';

import { NativeBaseProvider } from 'native-base';

import theme from '@/styles/theme';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const AppProviders: React.FC = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  );
};

export default AppProviders;
