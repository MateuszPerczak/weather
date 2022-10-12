import type { FC } from "react";
import type CityWeatherProps from "./CityWeather.types";
import type { ApiResponse } from "./CityWeather.types";
import Loader from "../Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { capitalize } from "lodash";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import Img from "../Img/Img";
import DataContainer from "../DataContainer/DataContainer";
import Data from "../Data/Data";
import Error from "../Error/Error";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Weather from "../Weather/Weather";

const CityWeather: FC<CityWeatherProps> = ({
  city,
  setPicker,
}): JSX.Element => {
  const { isLoading, error, data } = useQuery<ApiResponse>([city], async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6967cc85728d1a5a59fa0fdd6086595e`
    );
    return await response.json();
  });

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <Error />
      </motion.div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Card>
        <CardHeader>
          <Weather
            src={`./images/${data ? data.weather[0].main : "weather"}.webp`}
            alt={data ? data.weather[0].main : ""}
          />
        </CardHeader>
        <CardContent alignItems="center">
          <DataContainer flexDirection="column">
            <h1>{city ? city : ""}</h1>
            <h3>{data ? capitalize(data.weather[0].description) : ""}</h3>
          </DataContainer>
          <DataContainer flexDirection="row">
            <Data>
              <Img src="./images/Thermometer.webp" alt="Thermometer" />
              <span>
                {data ? `${Math.floor(data.main.temp - 273.15)}°C` : ""}
              </span>
            </Data>
            <Data>
              <Img src="./images/Humidity.webp" alt="Humidity" />
              <span>{data ? `${data.main.humidity}%` : ""}</span>
            </Data>
            <Data>
              <Img src="./images/Windsock.webp" alt="Windsock" />
              <span>{data ? `${data.wind.speed} Km/h` : ""}</span>
            </Data>
          </DataContainer>
          <DataContainer flexDirection="row">
            <Button onClick={() => setPicker(true)}>
              <Icon>&#xE00E;</Icon>
              <span>Change city</span>
            </Button>
          </DataContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CityWeather;
