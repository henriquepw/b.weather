import 'expo-constants';
import { NativeConstants } from 'expo-constants';

declare module 'expo-constants' {
  export interface Constants extends NativeConstants {
    deviceId?: string;
    linkingUrl?: string;

    manifest: {
      extra: {
        OPEN_WEATHER_MAP_API_KEY: string;
      };
    };
  }
}
