import React, { Fragment } from 'react';

import { parseISO } from 'date-fns';
import { Box, ScrollView, Skeleton } from 'native-base';

import ForecastDaySection from '@/components/molecules/ForecastDaySection';

import { ForecastMap } from '@/hooks/useForecast';

export type ForecastListsProps = {
  data?: ForecastMap;
  isLoading: boolean;
};

const ForecastLists: React.FC<ForecastListsProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <Box mx="4">
        {[1, 2].map((item) => (
          <Fragment key={item}>
            <Skeleton h="24px" w="100px" mt="4" borderRadius="sm" />

            <ScrollView horizontal mt="2">
              <Skeleton h="126px" w="96px" borderRadius="md" />
              <Skeleton h="126px" w="96px" borderRadius="md" ml="4" />
              <Skeleton h="126px" w="96px" borderRadius="md" ml="4" />
            </ScrollView>
          </Fragment>
        ))}
      </Box>
    );
  }

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
