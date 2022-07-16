import type { FC } from "react";
import StyledLoader from "./Loader.style";
import { motion } from "framer-motion";
import Img from "../Img/Img";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
        <Img src="./images/weather.png" alt="logo" />
      </motion.div>
    </StyledLoader>
  );
};

export default Loader;
