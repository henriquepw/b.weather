import React from 'react';

import { Flex, Text, IFlexProps } from 'native-base';

const Logo: React.FC<IFlexProps> = (props) => {
  return (
    <Flex direction="row" {...props}>
      <Text color="primary.500" fontWeight="bold" fontSize="4xl">
        B.
      </Text>
      <Text fontWeight="bold" fontSize="4xl">
        Weather
      </Text>
    </Flex>
  );
};

export default Logo;
