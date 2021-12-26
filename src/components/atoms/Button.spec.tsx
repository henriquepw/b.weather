import React from 'react';

import { render } from '@testing-library/react-native';

import AppProviders from '../templates/AppProviders';
import Button from './Button';

describe('atoms/Button', () => {
  it('check if button display the correctly name', () => {
    const { getByText } = render(
      <AppProviders>
        <Button>name</Button>
      </AppProviders>,
    );

    const buttonLabel = getByText('name');

    expect(buttonLabel.props.children).toBe('name');
  });
});
