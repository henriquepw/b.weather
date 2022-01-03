import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Box, Flex, IBoxProps, Icon, Text } from 'native-base';

import Card from '@/components/atoms/Card';
import SectionTitle from '@/components/atoms/SectionTitle';

export type InfoCardSectionProps = IBoxProps & {
  title: string;
  icon: string;
  lines: string[];
  isLoading?: boolean;
};

const InfoCardSection: React.FC<InfoCardSectionProps> = ({
  title,
  icon,
  lines,
  isLoading = false,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <SectionTitle mb="1">{title}</SectionTitle>

      <Card testID="card-container" align="center" isLoading={isLoading}>
        <Icon as={Feather} name={icon} color="primary.500" size="xl" mr="4" />
        <Flex testID="flex-lines-container">
          {lines.map((line) => (
            <Text key={line} color="trueGray.50" fontSize="md">
              {line}
            </Text>
          ))}
        </Flex>
      </Card>
    </Box>
  );
};

export default InfoCardSection;
