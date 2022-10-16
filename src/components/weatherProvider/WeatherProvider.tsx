import type { FC, PropsWithChildren } from "react";
import StyledWeatherProvider from "./WeatherProvider.styles";

const WeatherProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledWeatherProvider>{children}</StyledWeatherProvider>;
};

export default WeatherProvider;
