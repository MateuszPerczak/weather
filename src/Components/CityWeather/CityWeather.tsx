import type { FC } from "react";
import type CityWeatherProps from "./CityWeather.types";
import type { ApiResponse } from "./CityWeather.types";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { capitalize } from "lodash";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import Img from "../Img/Img";
import DataContainer from "../DataContainer/DataContainer";
import Data from "../Data/Data";
import Error from "../Error/Error";

const CityWeather: FC<CityWeatherProps> = ({ city }): JSX.Element => {
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
          <Img
            src={`./images/${data ? data.weather[0].main : "weather"}.webp`}
            alt={data ? data.weather[0].main : ""}
          />
        </CardHeader>
        <CardContent alignItems="center">
          <h1>{data ? data.name : ""}</h1>
          <h2>{data ? capitalize(data.weather[0].description) : ""}</h2>
          <DataContainer>
            <Data>
              <Img src="./images/Thermometer.webp" alt="Thermometer" />
              <span>
                {data ? `${Math.floor(data.main.temp - 273.15)} °C` : ""}
              </span>
            </Data>
            <Data>
              <Img src="./images/Windsock.webp" alt="Windsock" />
              <span>{data ? data.wind.speed : ""}</span>
            </Data>
          </DataContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CityWeather;
