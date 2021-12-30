import React from 'react';

import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import * as expoLocation from 'expo-location';

import { HEADER_TEST_ID } from '@/components/atoms/Header';

import { ScreenWrapper } from '@/utils/test/screenWrapper';

import RequestLocationPermission from './index';

describe('Screens -> RequestLocationPermission', () => {
  it('should contain a header element', async () => {
    const { getByTestId } = render(<RequestLocationPermission />, {
      wrapper: ScreenWrapper,
    });

    const header = await waitFor(() => getByTestId(HEADER_TEST_ID));

    expect(header).toBeTruthy();
  });

  it('should contain a info message about requesting permission', async () => {
    const { getByTestId } = render(<RequestLocationPermission />, {
      wrapper: ScreenWrapper,
    });

    const textMessage = await waitFor(() => getByTestId('text-message'));
    const iconAlert = getByTestId('icon-alert');

    expect(textMessage).toBeTruthy();
    expect(iconAlert).toBeTruthy();
  });

  it('should contain a request permission button', async () => {
    const { getByTestId } = render(<RequestLocationPermission />, {
      wrapper: ScreenWrapper,
    });

    const requestButton = await waitFor(() => getByTestId('button-request'));

    expect(requestButton).toBeTruthy();
  });

  it('should be able to request permission when the button is pressed', async () => {
    const requestPermissionMock = jest.fn();

    jest
      .spyOn(expoLocation, 'useForegroundPermissions')
      .mockImplementation(() => [null, requestPermissionMock, jest.fn()]);

    const { getByTestId } = render(<RequestLocationPermission />, {
      wrapper: ScreenWrapper,
    });

    const requestButton = await waitFor(() => getByTestId('button-request'));

    await act(async () => fireEvent.press(requestButton));

    expect(requestPermissionMock).toHaveBeenCalledTimes(1);
  });
});
