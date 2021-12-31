import React from 'react';

import InfoCardSection from '@/components/molecules/InfoCardSection';

import ScreenContainer from '@/components/templates/ScreenContainer';

const WeatherDetails: React.FC = () => {
  return (
    <ScreenContainer>
      <InfoCardSection
        title="Sua localização"
        icon="map-pin"
        lines={['Rua Bem legal, N 222', 'Cidade']}
      />
    </ScreenContainer>
  );
};

export default WeatherDetails;
