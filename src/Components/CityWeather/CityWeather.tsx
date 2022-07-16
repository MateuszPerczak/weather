import type { FC } from "react";
import { useEffect } from "react";
import type CityWeatherProps from "./CityWeather.types";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import Img from "../Img/Img";

const CityWeather: FC<CityWeatherProps> = ({ city }): JSX.Element => {
  const waetherMapper = {
    rain: "./images/rain.png",
    snow: "./images/snow.png",
    clear: "./images/clear.png",
    clouds: "./images/clouds.png",
  };
  const lon = 0;
  const lat = 0;
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6967cc85728d1a5a59fa0fdd6086595e`;

  useEffect(() => {
    console.log(city);

    const weather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city?.latitude}&lon=${city?.longitude}&appid=6967cc85728d1a5a59fa0fdd6086595e`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [city]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Card>
        <CardHeader>
          <Img src="./images/rain.png" alt="map" />
        </CardHeader>
        <CardContent>
          <h1>{city ? city.name : ""}</h1>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CityWeather;
