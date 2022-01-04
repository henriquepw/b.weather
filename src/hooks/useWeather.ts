import { useEffect, useState } from 'react';

import Constants from 'expo-constants';

import { openWeatherMapApi } from '@/services/openWeatherMapApi';

import { MainData } from '@/types/openWeather/mainData';
import { WeatherData } from '@/types/openWeather/weatherData';

export type GetWeatherResponse = {
  main: MainData;
  weather: WeatherData[];
};

export type UseWeatherParams = {
  latitude: number;
  longitude: number;
};

export type UseWeatherResponse = [GetWeatherResponse | undefined, boolean];

export function useWeather(coords?: UseWeatherParams): UseWeatherResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GetWeatherResponse>();

  useEffect(() => {
    async function fetchWeather() {
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

        const response = await openWeatherMapApi.get<GetWeatherResponse>(
          'weather',
          { params },
        );

        setData(response.data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [coords]);

  return [data, isLoading];
}
