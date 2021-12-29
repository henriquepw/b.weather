import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { useForegroundPermissions } from 'expo-location';
import { Flex, Icon, Text } from 'native-base';

import Button from '@/components/atoms/Button';

import ScreenContainer from '@/components/templates/ScreenContainer';

const RequestLocationPermission: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, requestPermission] = useForegroundPermissions();

  async function handleRequestPermission() {
    setIsLoading(true);

    await requestPermission();

    setIsLoading(false);
  }

  useEffect(() => {
    if (status?.granted) {
      console.log(status);
    }
  }, [status]);

  return (
    <ScreenContainer>
      <Flex align="center" my="auto">
        <Icon
          as={Feather}
          name="alert-triangle"
          color="warning.500"
          size="12"
          mb="4"
        />
        <Text fontSize="2xl" textAlign="center">
          É preciso da sua permissão para acessar a localização
        </Text>
      </Flex>

      <Button
        mb="40"
        onPress={handleRequestPermission}
        isLoading={isLoading}
        isLoadingText="Concedendo..."
      >
        Conceder Permissão
      </Button>
    </ScreenContainer>
  );
};

export default RequestLocationPermission;
