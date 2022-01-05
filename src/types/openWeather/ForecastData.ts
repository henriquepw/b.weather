import { MainData } from './mainData';
import { WeatherData } from './weatherData';

export type ForecastData = {
  dt_txt: string;
  main: MainData;
  weather: WeatherData[];
};
