import React from 'react';

import { NativeBaseProvider } from 'native-base';

import theme from '@/styles/theme';

const AppProviders: React.FC = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default AppProviders;
