import React from 'react';

import { ITextProps, Text } from 'native-base';

const SectionSubtitle: React.FC<ITextProps> = ({ children, ...rest }) => {
  return (
    <Text
      color="trueGray.50"
      fontWeight="medium"
      fontSize="sm"
      mb="1"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SectionSubtitle;
