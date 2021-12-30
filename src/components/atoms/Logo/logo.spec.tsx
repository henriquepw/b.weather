import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import Logo from './index';

describe('Atoms -> Logo', () => {
  it('should contain the app name', () => {
    const { getByText } = render(<Logo>name</Logo>, {
      wrapper: ComponentWrapper,
    });

    expect(getByText('B.')).toBeTruthy();
    expect(getByText('Weather')).toBeTruthy();
  });
});
