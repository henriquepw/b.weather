import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';

import {
  getCurrentPositionAsync,
  LocationObjectCoords,
  reverseGeocodeAsync,
} from 'expo-location';
import { useTheme, useToast } from 'native-base';

import FloatButton from '@/components/atoms/FloatButton';

import InfoCardSection from '@/components/molecules/InfoCardSection';

import ForecastLists from '@/components/organisms/ForecastLists';

import ScreenContainer from '@/components/templates/ScreenContainer';

import { useForecast } from '@/hooks/useForecast';
import { useWeather } from '@/hooks/useWeather';

import { WeatherIcons } from '@/enums/WeatherIcons';

import { capitalizeString } from '@/utils/capitalizeString';
import { formatTemperature } from '@/utils/formatTemperature';
import { WEATHER_ICONS_MAP } from '@/utils/weatherIconsMap';

const WeatherDetails: React.FC = () => {
  const toast = useToast();
  const theme = useTheme();

  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationLines, setLocationLines] = useState<string[]>([]);
  const [coords, setCoords] = useState<LocationObjectCoords>();

  const [currentWeather, isCurrentWeatherLoading] = useWeather(coords);
  const [forecast, isForecastLoading] = useForecast(coords);

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

  const loadLocation = useCallback(async (successFn?: () => void) => {
    toast.closeAll();

    setIsLocationLoading(true);

    try {
      const currentPosition = await getCurrentPositionAsync();
      const { latitude, longitude } = currentPosition.coords;

      setCoords(currentPosition.coords);

      const [{ street, streetNumber, city, region }] =
        await reverseGeocodeAsync({ latitude, longitude });

      setLocationLines([`${street}, N ${streetNumber}`, `${city} - ${region}`]);

      if (successFn) successFn();
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
  }, []);

  async function handleRefreshData() {
    loadLocation(() => {
      if (!toast.isActive('success-toast')) {
        toast.show({
          id: 'success-toast',
          title: 'Dados atualizados com sucesso!',
          status: 'success',
          placement: 'bottom',
        });
      }
    });
  }

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <>
      <ScreenContainer
        px="0"
        contentContainerStyle={{ paddingBottom: theme.sizes[24] }}
        refreshControl={
          <RefreshControl
            refreshing={isLocationLoading}
            onRefresh={handleRefreshData}
          />
        }
      >
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

        <ForecastLists data={forecast} isLoading={isForecastLoading} />
      </ScreenContainer>

      <FloatButton icon="refresh-cw" onPress={handleRefreshData} />
    </>
  );
};

export default WeatherDetails;
