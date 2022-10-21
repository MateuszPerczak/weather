import type { FC } from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import StyledAnimatedBackground, { AnimatedSun } from "./AnimatedBackground.style";

const AnimatedBackground: FC = (): JSX.Element => {
  return (
    <StyledAnimatedBackground>
      <AnimatedSun icon={faSun} />
    </StyledAnimatedBackground>
  );
};

export default AnimatedBackground;
