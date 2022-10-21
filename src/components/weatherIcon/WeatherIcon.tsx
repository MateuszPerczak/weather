import type { FC } from "react";
import {
  faWind,
  faSun,
  faCloud,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import StyledWeatherIcon from "./WeatherIcon.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherIcon: FC = (): JSX.Element => {
  return (
    <StyledWeatherIcon>
      <FontAwesomeIcon icon={faSun} />
    </StyledWeatherIcon>
  );
};

export default WeatherIcon;
