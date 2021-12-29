import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { useForegroundPermissions, PermissionStatus } from 'expo-location';
import { Flex, Icon, Text, useToast } from 'native-base';

import Button from '@/components/atoms/Button';

import ScreenContainer from '@/components/templates/ScreenContainer';

import useRootNavigation from '@/hooks/useRootNavigation';

import { RouterNames } from '@/enums/RouterNames';

const GRANTED_TOAST_ID = 'location-request-granted';
const DENIED_TOAST_ID = 'location-request-denied';

const RequestLocationPermission: React.FC = () => {
  const toast = useToast();
  const navigation = useRootNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [status, requestPermission] = useForegroundPermissions();

  async function handleRequestPermission() {
    setIsLoading(true);

    await requestPermission();

    setIsLoading(false);
  }

  useEffect(() => {
    if (
      status?.status === PermissionStatus.DENIED &&
      !toast.isActive(DENIED_TOAST_ID)
    ) {
      toast.show({
        id: DENIED_TOAST_ID,
        title: 'Houve um erro',
        description: 'A requisição de permissão foi negada',
        status: 'warning',
        placement: 'bottom',
      });
      return;
    }

    if (status?.granted && !toast.isActive(GRANTED_TOAST_ID)) {
      toast.show({
        id: GRANTED_TOAST_ID,
        title: 'Permissão concedida!',
        status: 'success',
        placement: 'bottom',
      });

      navigation.navigate(RouterNames.WEATHER_DETAILS);
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
