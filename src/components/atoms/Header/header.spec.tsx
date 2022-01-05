import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import Header from './index';

describe('Atoms -> Header', () => {
  it('should contain the app logo', () => {
    const { getByTestId } = render(<Header>name</Header>, {
      wrapper: ComponentWrapper,
    });

    const logo = getByTestId('logo');

    expect(logo).toBeTruthy();
  });
});
