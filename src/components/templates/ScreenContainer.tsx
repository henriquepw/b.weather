import React from 'react';

import { ScrollView, IScrollViewProps } from 'native-base';

import Header from '../atoms/Header';

const ScreenContainer: React.FC<IScrollViewProps> = ({ children, ...rest }) => {
  return (
    <ScrollView flex="1" px="4" bg="gray.900" {...rest}>
      <Header safeArea />
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;
