import { WeatherIcons } from '@/enums/WeatherIcons';

export const WEATHER_ICONS_MAP: Record<WeatherIcons, string> = {
  [WeatherIcons.CLEAR_SKY_DAY]: 'sun',
  [WeatherIcons.FEW_CLOUDS_DAY]: 'cloud',
  [WeatherIcons.SCATTERED_CLOUDS_DAY]: 'cloud',
  [WeatherIcons.BROKEN_CLOUDS_DAY]: 'cloud',
  [WeatherIcons.SHOWER_RAIN_DAY]: 'cloud-drizzle',
  [WeatherIcons.RAIN_DAY]: 'cloud-rain',
  [WeatherIcons.THUNDERSTORM_DAY]: 'cloud-lightning',
  [WeatherIcons.SNOW_DAY]: 'cloud-snow',
  [WeatherIcons.MIST_DAY]: 'cloud',

  [WeatherIcons.CLEAR_SKY_NIGHT]: 'sun',
  [WeatherIcons.FEW_CLOUDS_NIGHT]: 'cloud',
  [WeatherIcons.SCATTERED_CLOUDS_NIGHT]: 'cloud',
  [WeatherIcons.BROKEN_CLOUDS_NIGHT]: 'cloud',
  [WeatherIcons.SHOWER_RAIN_NIGHT]: 'cloud-drizzle',
  [WeatherIcons.RAIN_NIGHT]: 'cloud-rain',
  [WeatherIcons.THUNDERSTORM_NIGHT]: 'cloud-lightning',
  [WeatherIcons.SNOW_NIGHT]: 'cloud-snow',
  [WeatherIcons.MIST_NIGHT]: 'cloud',
} as const;
