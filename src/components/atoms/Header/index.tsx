import React from 'react';

import { Flex, IFlexProps } from 'native-base';

import Logo from '../Logo';

export const HEADER_TEST_ID = 'atoms/header';

const Header: React.FC<IFlexProps> = (props) => {
  return (
    <Flex
      testID={HEADER_TEST_ID}
      justify="center"
      align="center"
      height="40"
      {...props}
    >
      <Logo testID="logo" />
    </Flex>
  );
};

export default Header;
