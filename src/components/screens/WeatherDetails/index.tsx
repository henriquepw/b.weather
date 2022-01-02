import React, { useEffect, useState } from 'react';

import { getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location';
import { useToast } from 'native-base';

import InfoCardSection from '@/components/molecules/InfoCardSection';

import ScreenContainer from '@/components/templates/ScreenContainer';

const WeatherDetails: React.FC = () => {
  const toast = useToast();

  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationLines, setLocationLines] = useState<string[]>([]);

  useEffect(() => {
    async function loadLocation() {
      setIsLocationLoading(true);

      try {
        const currentPosition = await getCurrentPositionAsync();
        const { latitude, longitude } = currentPosition.coords;

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
    <ScreenContainer>
      <InfoCardSection
        testID="section-location"
        icon="map-pin"
        title="Sua localização"
        lines={locationLines}
        isLoading={isLocationLoading}
      />
    </ScreenContainer>
  );
};

export default WeatherDetails;
