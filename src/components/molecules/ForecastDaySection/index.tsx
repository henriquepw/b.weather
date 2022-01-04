import React, { useMemo } from 'react';

import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList, Flex, Heading, IFlexProps, useTheme } from 'native-base';

import { ForecastData } from '@/types/openWeather/ForecastData';

import { capitalizeString } from '@/utils/capitalizeString';

import ForecastHourCard from '../ForecastHourCard';

export type ForecastDaySectionProps = IFlexProps & {
  day: Date;
  data: ForecastData[];
};

const ForecastDaySection: React.FC<ForecastDaySectionProps> = ({
  day,
  data,
  ...rest
}) => {
  const theme = useTheme();

  const formattedDay = useMemo(() => {
    if (isToday(day)) {
      return format(day, "'Hoje,' dd 'de' MMMM", { locale: ptBR });
    }

    return capitalizeString(format(day, "E',' dd 'de' MMMM", { locale: ptBR }));
  }, [day]);

  return (
    <Flex {...rest}>
      <Heading fontSize="md" fontWeight="normal" ml="4" mt="4" mb="2">
        {formattedDay}
      </Heading>

      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{ paddingHorizontal: theme.sizes[4] }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.dt_txt}
        renderItem={({ item, index }) => (
          <ForecastHourCard ml={index ? '4' : '0'} data={item} />
        )}
      />
    </Flex>
  );
};

export default ForecastDaySection;
