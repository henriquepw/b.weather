import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { useForegroundPermissions, PermissionStatus } from 'expo-location';
import { Flex, Icon, Text, useToast } from 'native-base';

import Button from '@/components/atoms/Button';

import ScreenContainer from '@/components/templates/ScreenContainer';

import useRootNavigation from '@/hooks/useRootNavigation';

import { RouterNames } from '@/enums/RouterNames';

export const GRANTED_TOAST_ID = 'location-request-granted';
export const DENIED_TOAST_ID = 'location-request-denied';

const RequestLocationPermission: React.FC = () => {
  const toast = useToast();
  const navigation = useRootNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [status, requestPermission] = useForegroundPermissions();

  function displayStatusToast(permissionStatus?: PermissionStatus) {
    console.log(toast.isActive(GRANTED_TOAST_ID));
    console.log(toast.isActive(GRANTED_TOAST_ID));

    if (
      permissionStatus === PermissionStatus.DENIED &&
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

    if (
      permissionStatus === PermissionStatus.GRANTED &&
      !toast.isActive(GRANTED_TOAST_ID)
    ) {
      console.log('entrou aqui -----------');

      toast.show({
        id: GRANTED_TOAST_ID,
        title: 'Permissão concedida!',
        status: 'success',
        placement: 'bottom',
      });
    }
  }

  async function handleRequestPermission() {
    setIsLoading(true);

    const currentStatus = await requestPermission();

    displayStatusToast(currentStatus?.status);

    setIsLoading(false);
  }

  useEffect(() => {
    if (status?.granted && !toast.isActive(GRANTED_TOAST_ID)) {
      navigation.navigate(RouterNames.WEATHER_DETAILS);
    }
  }, [status]);

  return (
    <ScreenContainer testID="container">
      <Flex align="center" my="auto">
        <Icon
          testID="icon-alert"
          as={Feather}
          name="alert-triangle"
          color="warning.500"
          size="12"
          mb="4"
        />
        <Text testID="text-message" fontSize="2xl" textAlign="center">
          É preciso da sua permissão para acessar a localização
        </Text>
      </Flex>

      <Button
        testID="button-request"
        onPress={handleRequestPermission}
        isLoading={isLoading}
        isLoadingText="Concedendo..."
        mb="40"
      >
        Conceder Permissão
      </Button>
    </ScreenContainer>
  );
};

export default RequestLocationPermission;
