import React from 'react';

import { render } from '@testing-library/react-native';

import AppProviders from '@/components/templates/AppProviders';

import Logo from '.';

describe('atoms/Logo', () => {
  it('check if logo contains the app name', () => {
    const { getByText } = render(
      <AppProviders>
        <Logo>name</Logo>
      </AppProviders>,
    );

    const appName = getByText('B.Weather');

    expect(appName).toBeTruthy();
  });
});
