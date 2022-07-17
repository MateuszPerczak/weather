import type { Dispatch, SetStateAction } from "react";

type CityWeatherProps = {
  city: string;
  setPicker: Dispatch<SetStateAction<boolean>>;
};

export type ApiResponse = {
  name: string;
  weather: { main: string; description: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
};

export default CityWeatherProps;
