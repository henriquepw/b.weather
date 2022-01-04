import React, { useEffect, useMemo, useState } from 'react';

import { parseISO } from 'date-fns';
import {
  getCurrentPositionAsync,
  LocationObjectCoords,
  reverseGeocodeAsync,
} from 'expo-location';
import { useToast } from 'native-base';

import ForecastDaySection from '@/components/molecules/ForecastDaySection';
import InfoCardSection from '@/components/molecules/InfoCardSection';

import ScreenContainer from '@/components/templates/ScreenContainer';

import { useForecast } from '@/hooks/useForecast';
import { useWeather } from '@/hooks/useWeather';

import { WeatherIcons } from '@/enums/WeatherIcons';

import { capitalizeString } from '@/utils/capitalizeString';
import { formatTemperature } from '@/utils/formatTemperature';
import { WEATHER_ICONS_MAP } from '@/utils/weatherIconsMap';

const WeatherDetails: React.FC = () => {
  const toast = useToast();

  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationLines, setLocationLines] = useState<string[]>([]);
  const [coords, setCoords] = useState<LocationObjectCoords>();

  const [currentWeather, isCurrentWeatherLoading] = useWeather(coords);
  const [forecast] = useForecast(coords);

  const weatherIcon =
    WEATHER_ICONS_MAP[currentWeather?.weather[0].icon || WeatherIcons.MIST_DAY];

  const currentWeatherLines = useMemo(() => {
    const lines: string[] = [];

    if (!currentWeather) return ['Informação não encontrada...'];

    const { temp, humidity } = currentWeather.main;
    const { description } = currentWeather.weather[0];

    lines.push(`${formatTemperature(temp)}, ${humidity}%`);
    lines.push(capitalizeString(description));

    return lines;
  }, [currentWeather]);

  useEffect(() => {
    async function loadLocation() {
      setIsLocationLoading(true);

      try {
        const currentPosition = await getCurrentPositionAsync();
        const { latitude, longitude } = currentPosition.coords;

        setCoords(currentPosition.coords);

        const [{ street, streetNumber, city, region }] =
          await reverseGeocodeAsync({ latitude, longitude });

        setLocationLines([
          `${street}, N ${streetNumber}`,
          `${city} - ${region}`,
        ]);
      } catch {
        setLocationLines(['Localização não encontrada']);

        if (!toast.isActive('error-toast')) {
          toast.show({
            id: 'error-toast',
            title: 'Houve um erro',
            description: 'A requisição de permissão foi negada',
            status: 'error',
            placement: 'bottom',
          });
        }
      } finally {
        setIsLocationLoading(false);
      }
    }

    loadLocation();
  }, []);

  return (
    <ScreenContainer px="0">
      <InfoCardSection
        mx="4"
        testID="section-location"
        icon="map-pin"
        title="Sua localização"
        lines={locationLines}
        isLoading={isLocationLoading}
      />

      <InfoCardSection
        mt="6"
        mx="4"
        testID="section-current-weather"
        icon={weatherIcon}
        title="Clima"
        lines={currentWeatherLines}
        isLoading={isCurrentWeatherLoading}
      />

      {forecast !== undefined &&
        Object.keys(forecast).map((day) => (
          <ForecastDaySection
            key={day}
            day={parseISO(day)}
            data={forecast[day]}
          />
        ))}
    </ScreenContainer>
  );
};

export default WeatherDetails;
