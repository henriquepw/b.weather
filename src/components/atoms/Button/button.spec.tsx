import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import Button from './index';

describe('Atoms -> Button', () => {
  it('check if button display the correctly name', () => {
    const { getByText } = render(<Button>name</Button>, {
      wrapper: ComponentWrapper,
    });

    const buttonLabel = getByText('name');

    expect(buttonLabel).toBeTruthy();
  });
});
