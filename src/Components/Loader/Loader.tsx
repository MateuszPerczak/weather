import type { FC } from "react";
import StyledLoader, { StyledImg } from "./Loader.style";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledImg
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
        src="./images/weather.png"
        alt="logo"
      />
      <span>WEATHER</span>
    </StyledLoader>
  );
};

export default Loader;
