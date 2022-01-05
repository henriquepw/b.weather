import axios from 'axios';

export const openWeatherMapApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
