import React from 'react';

import { Flex, Text } from 'native-base';

const Logo: React.FC = () => {
  return (
    <Flex direction="row">
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
