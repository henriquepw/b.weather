import React from 'react';

import { render } from '@testing-library/react-native';

import { ForecastMap } from '@/hooks/useForecast';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import ForecastLists from './index';

describe('Organisms -> ForecastLists', () => {
  it('should be able to display the skeleton loading if "isLoading" prop is true', () => {
    const { getByTestId } = render(<ForecastLists isLoading />, {
      wrapper: ComponentWrapper,
    });

    const skeletonElement = getByTestId('skeleton-box');

    expect(skeletonElement).toBeTruthy();
  });

  it('should be able to display the lists if is not loading', () => {
    const forecastMap = {
      '2022-01-01': [],
      '2022-01-02': [],
    } as ForecastMap;

    const { getByTestId } = render(
      <ForecastLists isLoading={false} data={forecastMap} />,
      { wrapper: ComponentWrapper },
    );

    Object.keys(forecastMap).forEach((day) => {
      const forecastDaySectionElement = getByTestId(
        `forecast-day-section-${day}`,
      );

      expect(forecastDaySectionElement).toBeTruthy();
    });
  });
});
