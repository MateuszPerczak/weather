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
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

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
          <motion.div
            animate={{
              y: ["-2%", "2%"],
            }}
            transition={{
              type: "spring",
              mass: 10,
              stiffness: 50,
              damping: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Img
              src={`./images/${data ? data.weather[0].main : "weather"}.webp`}
              alt={data ? data.weather[0].main : ""}
            />
          </motion.div>
        </CardHeader>
        <CardContent alignItems="flex-start">
          <h1>{data ? data.name : ""}</h1>
          <h2>{data ? capitalize(data.weather[0].description) : ""}</h2>
          <DataContainer>
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
          <Button onClick={() => setPicker(true)}>
            <Icon>&#xE00E;</Icon>
            <span>Change city</span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CityWeather;
