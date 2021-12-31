import React from 'react';

import { Flex, IFlexProps } from 'native-base';

const Card: React.FC<IFlexProps> = ({ children, ...rest }) => {
  return (
    <Flex direction="row" borderRadius="md" bg="trueGray.800" p="6" {...rest}>
      {children}
    </Flex>
  );
};

export default Card;
