import React from 'react';

import { Box, IBoxProps } from 'native-base';

const ScreenContainer: React.FC<IBoxProps> = ({ children, ...rest }) => {
  return (
    <Box flex="1" px="4" bg="gray.900" safeArea {...rest}>
      {children}
    </Box>
  );
};

export default ScreenContainer;
