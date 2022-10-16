import type { FC } from "react";
import { useState } from "react";
import StyledNav, { StyledNavChildren, StyledNavLogo } from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";
import { cities } from "../../data/cities";
import Button from "@components/button/Button";
import ComboItem from "@components/comboItem/ComboItem";

import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const Nav: FC = (): JSX.Element => {
  const [selectedCity, setSelectedCity] = useState<string>("Select location");

  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faWind} />
        <span>Weather</span>
      </StyledNavLogo>
      <StyledNavChildren>
        <ComboBox text={selectedCity}>
          {cities.map((city, index) => (
            <ComboItem key={`city-${index}`} onClick={() => setSelectedCity(city)}>
              {city}
            </ComboItem>
          ))}
        </ComboBox>
        <Button>
          <FontAwesomeIcon icon={faSyncAlt} />
        </Button>
      </StyledNavChildren>
    </StyledNav>
  );
};

export default Nav;
