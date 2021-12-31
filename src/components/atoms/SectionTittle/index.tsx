import React from 'react';

import { ITextProps, Text } from 'native-base';

const SectionTittle: React.FC<ITextProps> = ({ children, ...rest }) => {
  return (
    <Text color="trueGray.50" fontWeight="bold" fontSize="lg" mb="1" {...rest}>
      {children}
    </Text>
  );
};

export default SectionTittle;
