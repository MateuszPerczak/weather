import type { FC } from "react";
import StyledWeather, { StyledWeatherCity } from "./Weather.styles";
import type { WeatherProps } from "./Weather.types";

const Weather: FC<WeatherProps> = ({ city }): JSX.Element => {
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
    </StyledWeather>
  );
};

export default Weather;
