import type { FC } from "react";
import StyledLoader from "./Loader.style";
import Weather from "../Weather/Weather";

const Loader: FC = (): JSX.Element => {
  return (
    <StyledLoader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Weather src="./images/Clear.webp" alt="logo" />
    </StyledLoader>
  );
};

export default Loader;
