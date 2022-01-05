import React from 'react';
import { View } from 'react-native';

import { parseISO } from 'date-fns';

import ForecastDaySection from '@/components/molecules/ForecastDaySection';

import { ForecastMap } from '@/hooks/useForecast';

export type ForecastListsProps = {
  data?: ForecastMap;
  isLoading: boolean;
};

const ForecastLists: React.FC<ForecastListsProps> = ({ data, isLoading }) => {
  if (isLoading) return null;

  if (data === undefined) return null;

  return (
    <>
      {Object.keys(data)
        .splice(0, 3)
        .map((day) => (
          <ForecastDaySection key={day} day={parseISO(day)} data={data[day]} />
        ))}
    </>
  );
};

export default ForecastLists;
