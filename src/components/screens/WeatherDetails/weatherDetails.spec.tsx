import React from 'react';

import { render, waitFor } from '@testing-library/react-native';
import {
  getCurrentPositionAsync,
  LocationGeocodedAddress,
  reverseGeocodeAsync,
  LocationObject,
} from 'expo-location';

import { ScreenWrapper } from '@/utils/test/screenWrapper';
import { mocked } from 'ts-jest/utils';

import WeatherDetails from './index';

jest.mock('expo-location');

describe('Screen -> WeatherDetails', () => {
  beforeEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  afterEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  it('should be able to display the address by the current location', async () => {
    const getCurrentPositionAsyncMocked = mocked(getCurrentPositionAsync);
    const reverseGeocodeAsyncMocked = mocked(reverseGeocodeAsync);

    const locationAddress: LocationGeocodedAddress = {
      name: null,
      street: 'any_street',
      streetNumber: 'any_number',
      city: 'any_city',
      country: 'any_country',
      district: 'any_district',
      isoCountryCode: 'any_code',
      postalCode: 'any_postalCode',
      region: 'any_region',
      subregion: 'any_subregion',
      timezone: 'any_timezone',
    };

    const locationObject = {
      coords: {
        latitude: 0,
        longitude: 0,
      },
    } as LocationObject;

    getCurrentPositionAsyncMocked.mockReturnValueOnce(
      Promise.resolve(locationObject),
    );

    reverseGeocodeAsyncMocked.mockReturnValueOnce(
      Promise.resolve([locationAddress]),
    );

    const { getByText } = render(<WeatherDetails />, {
      wrapper: ScreenWrapper,
    });

    const locationLine1 = await waitFor(() =>
      getByText(`${locationAddress.street}, N ${locationAddress.streetNumber}`),
    );

    const locationLine2 = () =>
      getByText(`${locationAddress.city} - ${locationAddress.region}`);

    expect(locationLine1).toBeTruthy();
    expect(locationLine2).toBeTruthy();
  });

  it('should be able to display the address by the current location', async () => {
    const getCurrentPositionAsyncMocked = mocked(getCurrentPositionAsync);
    getCurrentPositionAsyncMocked.mockImplementation(() => {
      throw new Error();
    });

    const { getByText } = render(<WeatherDetails />, {
      wrapper: ScreenWrapper,
    });

    const locationErrorLine = await waitFor(() =>
      getByText('Localização não encontrada'),
    );

    expect(getCurrentPositionAsyncMocked).toThrowError();
    expect(locationErrorLine).toBeTruthy();
  });
});
