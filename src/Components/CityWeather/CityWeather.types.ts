type CityWeatherProps = {
  city: string;
};

export type ApiResponse = {
  name: string;
  weather: { main: string; description: string }[];
  main: { temp: number };
  wind: { speed: number };
};

export default CityWeatherProps;
