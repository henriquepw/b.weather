import React from 'react';

import { Flex, IFlexProps, Skeleton } from 'native-base';

export type CardProps = IFlexProps & {
  isLoading?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <Skeleton testID="skeleton" borderRadius="md" isLoaded={!isLoading}>
      <Flex
        testID="flex-container"
        direction="row"
        borderRadius="md"
        bg="trueGray.800"
        p="6"
        {...rest}
      >
        {children}
      </Flex>
    </Skeleton>
  );
};

export default Card;
