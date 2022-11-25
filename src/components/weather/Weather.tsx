import WeatherIcon from "@components/weatherIcon/WeatherIcon";
import type { FC } from "react";
import StyledWeather, { StyledWeatherCity } from "./Weather.styles";
import type { WeatherProps } from "./Weather.types";
import WeatherTemperature from "@components/weatherTemperature/WeatherTemperature";
import { useWeather } from "@hooks/useWeather";

const Weather: FC<WeatherProps> = ({ city }): JSX.Element => {
  const { isLoading, error, data } = useWeather(city);

  if (error) {
    return <>ERR</>;
  }

  if (isLoading) {
    return <></>;
  }

  console.log(data);
  return (
    <StyledWeather
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ type: "spring", mass: 0.6, stiffness: 50 }}
    >
      <StyledWeatherCity>
        <span>Weather in {city}</span>
      </StyledWeatherCity>

      <WeatherTemperature>
        <WeatherIcon />
        <span>{Math.round((data?.main.temp ?? 273.15) - 273.15)}&deg;</span>
      </WeatherTemperature>
    </StyledWeather>
  );
};

export default Weather;
