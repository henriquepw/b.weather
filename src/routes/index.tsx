import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RequestLocationPermission from '@/components/screens/RequestLocationPermission';
import WeatherDetails from '@/components/screens/WeatherDetails';

import { StackParamList } from '@/hooks/useRootNavigation';

import { RouterNames } from '@/enums/RouterNames';

const Stack = createNativeStackNavigator<StackParamList>();

const Routers: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={RouterNames.REQUEST_LOCATION_PERMISSION}
      >
        <Stack.Screen
          name={RouterNames.REQUEST_LOCATION_PERMISSION}
          component={RequestLocationPermission}
        />

        <Stack.Screen
          name={RouterNames.WEATHER_DETAILS}
          component={WeatherDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
