import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouterNames } from '@/enums/RouterNames';

export type StackParamList = {
  [RouterNames.REQUEST_LOCATION_PERMISSION]: undefined;
  [RouterNames.WEATHER_DETAILS]: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<StackParamList>;

export default (): RootNavigationProps => useNavigation<RootNavigationProps>();
