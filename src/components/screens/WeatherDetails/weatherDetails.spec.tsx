import React from 'react';

import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import {
  getCurrentPositionAsync,
  LocationGeocodedAddress,
  reverseGeocodeAsync,
  LocationObject,
} from 'expo-location';

import * as UseWeather from '@/hooks/useWeather';

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

    let locationAddress: LocationGeocodedAddress = {
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

    getCurrentPositionAsyncMocked.mockResolvedValue(locationObject);
    reverseGeocodeAsyncMocked.mockResolvedValueOnce([locationAddress]);

    const { getByText, getByTestId } = render(<WeatherDetails />, {
      wrapper: ScreenWrapper,
    });

    let locationLine1 = await waitFor(() =>
      getByText(
        `${locationAddress.street}, Nº ${locationAddress.streetNumber}`,
      ),
    );

    const locationLine2 = getByText(
      `${locationAddress.city} - ${locationAddress.region}`,
    );

    expect(locationLine1).toBeTruthy();
    expect(locationLine2).toBeTruthy();

    locationAddress = {
      name: null,
      street: null,
      streetNumber: '10',
      city: null,
      country: 'any_country',
      district: 'any_district',
      isoCountryCode: 'any_code',
      postalCode: 'any_postalCode',
      region: null,
      subregion: null,
      timezone: 'any_timezone',
    };

    reverseGeocodeAsyncMocked.mockResolvedValueOnce([locationAddress]);

    const btnRefresh = getByTestId('float-btn-refresh');

    await act(async () => fireEvent.press(btnRefresh));

    locationLine1 = getByText('Nº 10');
    expect(locationLine1).toBeTruthy();

    locationAddress = {
      name: null,
      street: 'any_street',
      streetNumber: null,
      city: null,
      country: 'any_country',
      district: 'any_district',
      isoCountryCode: 'any_code',
      postalCode: 'any_postalCode',
      region: null,
      subregion: 'any_subregion',
      timezone: 'any_timezone',
    };

    reverseGeocodeAsyncMocked.mockResolvedValueOnce([locationAddress]);

    await act(async () => fireEvent.press(btnRefresh));

    locationLine1 = getByText(String(locationAddress.street));
    expect(locationLine1).toBeTruthy();
  });

  it('should be able to display a warning message if has an error with getting the location', async () => {
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

  it('should be able to display the current weather correctly', async () => {
    const locationObject = {
      coords: {
        latitude: 0,
        longitude: 0,
      },
    } as LocationObject;

    const getCurrentPositionAsyncMocked = mocked(getCurrentPositionAsync);
    getCurrentPositionAsyncMocked.mockResolvedValueOnce(locationObject);

    const weatherData = {
      weather: [
        {
          id: 1,
          icon: '01d',
          description: 'any_description',
        },
      ],
      main: {
        temp: 1,
        feels_like: 1,
        temp_min: 1,
        temp_max: 1,
        pressure: 1,
        humidity: 1,
      },
    };

    jest
      .spyOn(UseWeather, 'useWeather')
      .mockReturnValue([weatherData, false] as UseWeather.UseWeatherResponse);

    const { getByText } = render(<WeatherDetails />, {
      wrapper: ScreenWrapper,
    });

    const weatherTempLine = await waitFor(() =>
      getByText(`1,0 ºC, 1%`, { exact: false }),
    );

    const weatherDescriptionLine = getByText(
      new RegExp(weatherData.weather[0].description, 'ig'),
    );

    expect(weatherTempLine).toBeTruthy();
    expect(weatherDescriptionLine).toBeTruthy();
  });

  it('should be able to refresh the data', async () => {
    const locationObject = {
      coords: {
        latitude: 0,
        longitude: 0,
      },
    } as LocationObject;

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

    const getCurrentPositionAsyncMocked = mocked(getCurrentPositionAsync);
    const reverseGeocodeAsyncMocked = mocked(reverseGeocodeAsync);

    getCurrentPositionAsyncMocked.mockResolvedValue(locationObject);
    reverseGeocodeAsyncMocked.mockResolvedValue([locationAddress]);

    const weatherData = {
      weather: [
        {
          id: 1,
          icon: '01d',
          description: 'any_description',
        },
      ],
      main: {
        temp: 1,
        feels_like: 1,
        temp_min: 1,
        temp_max: 1,
        pressure: 1,
        humidity: 1,
      },
    };

    jest
      .spyOn(UseWeather, 'useWeather')
      .mockReturnValueOnce([
        weatherData,
        false,
      ] as UseWeather.UseWeatherResponse);

    const { getByText, getByTestId } = render(<WeatherDetails />, {
      wrapper: ScreenWrapper,
    });

    const refreshedWeatherData = {
      weather: [
        {
          id: 1,
          icon: '01d',
          description: 'update_any_description',
        },
      ],
      main: {
        temp: 2,
        feels_like: 2,
        temp_min: 2,
        temp_max: 2,
        pressure: 2,
        humidity: 2,
      },
    };

    jest
      .spyOn(UseWeather, 'useWeather')
      .mockReturnValue([
        refreshedWeatherData,
        false,
      ] as UseWeather.UseWeatherResponse);

    fireEvent.press(getByTestId('float-btn-refresh'));

    const weatherTempLine = await waitFor(() =>
      getByText(`2,0 ºC, 2%`, { exact: false }),
    );

    const weatherDescriptionLine = getByText(
      new RegExp(refreshedWeatherData.weather[0].description, 'ig'),
    );

    expect(weatherTempLine).toBeTruthy();
    expect(weatherDescriptionLine).toBeTruthy();
  });
});
