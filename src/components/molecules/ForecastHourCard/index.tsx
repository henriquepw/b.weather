import React from 'react';

import { Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { Icon, Text } from 'native-base';

import Card, { CardProps } from '@/components/atoms/Card';

import { ForecastData } from '@/types/openWeather/ForecastData';

import { WeatherIcons } from '@/enums/WeatherIcons';

import { formatTemperature } from '@/utils/formatTemperature';
import { WEATHER_ICONS_MAP } from '@/utils/weatherIconsMap';

export type ForecastHourCardProps = CardProps & {
  data: ForecastData;
};

const ForecastHourCard: React.FC<ForecastHourCardProps> = ({
  data,
  ...rest
}) => {
  const hour = format(parseISO(data.dt_txt), 'HH:mm');
  const temperature = formatTemperature(data.main.temp);
  const iconName =
    WEATHER_ICONS_MAP[data.weather[0]?.icon || WeatherIcons.MIST_DAY];

  return (
    <Card w="96px" direction="column" align="center" p="4" {...rest}>
      <Text fontSize="sm" color="trueGray.300">
        {hour}
      </Text>
      <Icon as={Feather} name={iconName} my="2" color="primary.500" />
      <Text fontWeight="bold" fontSize="md">
        {temperature}
      </Text>
    </Card>
  );
};

export default ForecastHourCard;
