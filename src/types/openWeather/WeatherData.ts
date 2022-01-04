import { WeatherIcons } from '@/enums/WeatherIcons';

export type WeatherData = {
  id: number;
  description: string;
  icon: WeatherIcons;
};
