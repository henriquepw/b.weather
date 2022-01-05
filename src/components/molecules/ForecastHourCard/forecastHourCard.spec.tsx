import React from 'react';

import { render } from '@testing-library/react-native';

import { ForecastData } from '@/types/openWeather/ForecastData';

import { WeatherIcons } from '@/enums/WeatherIcons';

import { ComponentWrapper } from '@/utils/test/componentWrapper';
import { WEATHER_ICONS_MAP } from '@/utils/weatherIconsMap';

import ForecastHourCard from './index';

describe('Molecules -> ForecastHourCard', () => {
  it('should be able to display the hour, temperature and icon currently', () => {
    const forecastData = {
      dt_txt: '2020-11-11 11:00:00',
      main: { temp: 1 },
      weather: [{ icon: '01d' }],
    } as ForecastData;

    const { getByText, getByTestId } = render(
      <ForecastHourCard testID="card" data={forecastData} />,
      { wrapper: ComponentWrapper },
    );

    const hourElement = getByText('11:00');
    const tempElement = getByText('1,0 ºC');

    const cardElement = getByTestId('card');
    const iconElement = cardElement.props.children[1];

    expect(hourElement).toBeTruthy();
    expect(tempElement).toBeTruthy();
    expect(iconElement.props.name).toBe(WEATHER_ICONS_MAP['01d']);
  });

  it('should be able to display a default icon if the icon not match with the map', () => {
    const forecastData = {
      dt_txt: '2020-11-11 11:00:00',
      main: { temp: 1 },
      weather: [{}],
    } as ForecastData;

    const { getByTestId } = render(
      <ForecastHourCard testID="card" data={forecastData} />,
      { wrapper: ComponentWrapper },
    );

    const cardElement = getByTestId('card');
    const iconElement = cardElement.props.children[1];

    expect(iconElement.props.name).toBe(
      WEATHER_ICONS_MAP[WeatherIcons.MIST_DAY],
    );
  });
});
