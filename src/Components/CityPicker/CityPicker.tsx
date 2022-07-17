import type { FC } from "react";
import type CityPickerProps from "./CityPicker.types";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Img from "../Img/Img";
import cities from "../../Cities/cities";
import InputCity from "../InputCity/InputCity";

const CityPicker: FC<CityPickerProps> = ({
  city,
  setCity,
  setPicker,
}: CityPickerProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Card>
        <CardHeader>
          <Img src="./images/Map.webp" alt="Map" />
        </CardHeader>
        <CardContent alignItems="flex-end">
          <Input header={city ? city : "Choose a city"}>
            {cities.map((city, index) => {
              return (
                <InputCity onClick={() => setCity(city)} key={index}>
                  {city}
                </InputCity>
              );
            })}
          </Input>
          {city && (
            <Button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setPicker(false)}
            >
              <span>Check weather</span>
              <Icon>&#xE00F;</Icon>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CityPicker;
