import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import StyledCity, { StyledCityText } from "./City.styles";

const City: FC = (): JSX.Element => {
  return (
    <StyledCity
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ type: "spring", mass: 0.6, stiffness: 50 }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
      <StyledCityText>Pls select your city</StyledCityText>
    </StyledCity>
  );
};

export default City;
