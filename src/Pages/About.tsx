import { motion } from "framer-motion";
import type { FC } from "react";
import Card from "../Components/Card/Card";
import CardHeader from "../Components/CardHeader/CardHeader";
import CardContent from "../Components/CardContent/CardContent";
import Img from "../Components/Img/Img";
import RouterLink from "../Components/RouterLink/RouterLink";

const About: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: "0%" }}
      animate={{ opacity: 1, scale: "100%" }}
    >
      <Card>
        <CardHeader>
          <Img src="./images/Clear.webp" alt="Logo" />
        </CardHeader>
        <CardContent alignItems="flex-start">
          <h1>About weather</h1>
          <h3>Author: Mateusz Perczak</h3>
          <h4>Libraries:</h4>
          <h5>
            React, Emotion, Lodash, framer-motion, react-query,
            react-router-dom, react-use-system-theme
          </h5>
          <RouterLink to="/">Home</RouterLink>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;
