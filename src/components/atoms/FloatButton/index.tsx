import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Icon, IconButton, IIconButtonProps } from 'native-base';

export type FloatButtonProps = Omit<IIconButtonProps, 'icon'> & {
  icon: string;
};

const FloatButton: React.FC<FloatButtonProps> = ({ icon, ...rest }) => {
  return (
    <IconButton
      w="16"
      h="16"
      right="4"
      bottom="4"
      bg="primary.500"
      position="absolute"
      borderRadius="32px"
      alignItems="center"
      justifyContent="center"
      icon={<Icon color="gray.50" as={Feather} name={icon} />}
      {...rest}
    />
  );
};

export default FloatButton;
