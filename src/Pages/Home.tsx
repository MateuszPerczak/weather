import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card/Card";
import CardHeader from "../Components/CardHeader/CardHeader";
import CardContent from "../Components/CardContent/CardContent";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import Icon from "../Components/Icon/Icon";

const Home: FC = (): JSX.Element => {
  const [city, setCity] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: "0%" }}
      animate={{ opacity: 1, scale: "100%" }}
      exit={{ opacity: 0, scale: "0%" }}
    >
      <Card>
        <CardHeader>
          <img src="./images/marker.png" alt="map" />
        </CardHeader>
        <CardContent>
          <Input header="Choose a city">
            <span>Kraków</span>
            <span>Katowice</span>
            <span>Rybnik</span>
          </Input>
          <Button>
            Next <Icon>&#xE013;</Icon>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Home;
