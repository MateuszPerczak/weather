import WeatherIcon from "@components/weatherIcon/WeatherIcon";
import type { FC } from "react";
import StyledWeather, { StyledWeatherCity } from "./Weather.styles";
import type { WeatherProps } from "./Weather.types";
import { useQuery } from "@tanstack/react-query";
import WeatherTemperature from "@components/weatherTemperature/WeatherTemperature";

const Weather: FC<WeatherProps> = ({ city }): JSX.Element => {
  const { isLoading, error, data } = useQuery<any>([city], async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6967cc85728d1a5a59fa0fdd6086595e`,
    );
    return await response.json();
  });

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
      {/* <WeatherTemperature /> */}
      {/* <WeatherIcon /> */}
    </StyledWeather>
  );
};

export default Weather;
