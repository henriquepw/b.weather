import React from 'react';

import { render } from '@testing-library/react-native';

import { ForecastData } from '@/types/openWeather/ForecastData';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import ForecastDaySection from './index';

describe('Molecules -> ForecastDaySection', () => {
  it('should be able to display the forecast hour card list', () => {
    const today = new Date();

    const forecastData = [
      {
        dt_txt: '2020-11-11 11:00:00',
        main: { temp: 1 },
        weather: [{ icon: '01d' }],
      },
      {
        dt_txt: '2020-11-11 13:00:00',
        main: { temp: 1 },
        weather: [{ icon: '01d' }],
      },
    ] as ForecastData[];

    const { getByTestId } = render(
      <ForecastDaySection testID="card" day={today} data={forecastData} />,
      { wrapper: ComponentWrapper },
    );

    const forecastCardList = getByTestId('list-forecast-card');

    expect(forecastCardList.props.data).toStrictEqual(forecastData);
  });

  it('should be able to display the day in the current format', () => {
    const day = new Date(2022, 0, 4); // 2022-01-04

    const forecastData = [
      {
        dt_txt: '2020-11-11 11:00:00',
        main: { temp: 1 },
        weather: [{ icon: '01d' }],
      },
    ] as ForecastData[];

    const { getByText } = render(
      <ForecastDaySection testID="card" day={day} data={forecastData} />,
      { wrapper: ComponentWrapper },
    );

    const dayElement = getByText('Terça, 04 de janeiro');

    expect(dayElement).toBeTruthy();
  });
});
