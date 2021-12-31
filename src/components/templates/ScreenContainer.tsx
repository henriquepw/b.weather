import React from 'react';

import { Box, IBoxProps } from 'native-base';

import Header from '../atoms/Header';

const ScreenContainer: React.FC<IBoxProps> = ({ children, ...rest }) => {
  return (
    <Box flex="1" px="4" bg="gray.900" safeArea {...rest}>
      <Header />
      {children}
    </Box>
  );
};

export default ScreenContainer;
