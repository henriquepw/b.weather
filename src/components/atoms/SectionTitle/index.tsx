import React from 'react';

import { ITextProps, Text } from 'native-base';

const SectionTitle: React.FC<ITextProps> = ({ children, ...rest }) => {
  return (
    <Text color="trueGray.50" fontWeight="bold" fontSize="lg" {...rest}>
      {children}
    </Text>
  );
};

export default SectionTitle;
