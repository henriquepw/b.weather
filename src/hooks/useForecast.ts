import { useEffect, useState } from 'react';

import { format, parseISO } from 'date-fns';
import Constants from 'expo-constants';

import { openWeatherMapApi } from '@/services/openWeatherMapApi';

import { ForecastData } from '@/types/openWeather/ForecastData';

export type GetForecastResponse = {
  list: ForecastData[];
};

export type UseForecastParams = {
  latitude: number;
  longitude: number;
};

type DayString = string; // YYYY-MM-DD

export type ForecastMap = Record<DayString, ForecastData[]>;

export type UseForecastResponse = [ForecastMap | undefined, boolean];

export function useForecast(coords?: UseForecastParams): UseForecastResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ForecastMap>();

  useEffect(() => {
    async function fetchForecast() {
      if (!coords) return;

      setIsLoading(true);

      const { latitude, longitude } = coords;

      try {
        const params = {
          appid: Constants.manifest.extra.OPEN_WEATHER_MAP_API_KEY,
          lon: longitude,
          lat: latitude,
          units: 'metric',
          lang: 'pt_br',
        };

        const response = await openWeatherMapApi.get<GetForecastResponse>(
          'forecast',
          { params },
        );

        const forecastMap: ForecastMap = {};

        response.data.list.forEach((forecast) => {
          const forecastDate = format(parseISO(forecast.dt_txt), 'yyyy-MM-dd');

          forecastMap[forecastDate] = [
            ...(forecastMap[forecastDate] || []),
            forecast,
          ];
        });

        setData(forecastMap);
      } finally {
        setIsLoading(false);
      }
    }

    fetchForecast();
  }, [coords]);

  return [data, isLoading];
}
