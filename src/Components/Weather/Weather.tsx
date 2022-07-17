import { motion } from "framer-motion";
import type { FC } from "react";
import type WeatherProps from "./Weather.types";
import Img from "../Img/Img";

const Weather: FC<WeatherProps> = ({ src, alt }: WeatherProps) => {
  return (
    <motion.div
      animate={{
        y: ["-5%", "5%"],
      }}
      transition={{
        type: "spring",
        mass: 10,
        stiffness: 10,
        damping: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Img src={src} alt={alt} />
    </motion.div>
  );
};

export default Weather;
