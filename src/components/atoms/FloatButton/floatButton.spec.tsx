import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import FloatButton from './index';

describe('Atoms -> FloatButton', () => {
  it('should be possible to execute the function passed in "onPress" when clicked', () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(
      <FloatButton
        testID="float-button"
        icon="refresh-cw"
        onPress={handlePress}
      />,
      {
        wrapper: ComponentWrapper,
      },
    );

    const btn = getByTestId('float-button');

    fireEvent.press(btn);

    expect(handlePress).toBeCalled();
  });
});
