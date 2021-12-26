import React from 'react';

import { NativeBaseProvider } from 'native-base';

const AppProviders: React.FC = ({ children }) => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

export default AppProviders;
