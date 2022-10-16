import City from "@components/city/City";
import Weather from "@components/weather/Weather";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import StyledWeatherProvider from "./WeatherProvider.styles";
import type { WeatherProviderProps } from "./WeatherProvider.types";

const WeatherProvider: FC<WeatherProviderProps> = ({ city }): JSX.Element => {
  return (
    <StyledWeatherProvider>
      <AnimatePresence mode="wait">
        {!city && <City />}
        {city && <Weather city={city} />}
      </AnimatePresence>
    </StyledWeatherProvider>
  );
};

export default WeatherProvider;
