import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Box, Flex, Icon, Text } from 'native-base';

import Card from '@/components/atoms/Card';
import SectionTittle from '@/components/atoms/SectionTittle';

export type InfoCardSectionProps = {
  title: string;
  icon: string;
  lines: string[];
};

const InfoCardSection: React.FC<InfoCardSectionProps> = ({
  title,
  icon,
  lines,
}) => {
  return (
    <Box>
      <SectionTittle>{title}</SectionTittle>
      <Card align="center">
        <Icon as={Feather} name={icon} color="primary.500" size="xl" mr="4" />
        <Flex>
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
