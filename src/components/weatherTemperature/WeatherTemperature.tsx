import type { FC } from "react";
import StyledWeatherTemperature from "./WeatherTemperature.styles";

const WeatherTemperature: FC = (): JSX.Element => {
  return <StyledWeatherTemperature>18&deg;</StyledWeatherTemperature>;
};

export default WeatherTemperature;
