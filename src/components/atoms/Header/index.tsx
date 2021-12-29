import React from 'react';

import { Flex } from 'native-base';

import Logo from '../Logo';

const Header: React.FC = () => {
  return (
    <Flex height="40" justify="center" align="center">
      <Logo />
    </Flex>
  );
};

export default Header;
