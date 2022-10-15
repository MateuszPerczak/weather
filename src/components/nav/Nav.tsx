import type { FC } from "react";
import { useState } from "react";
import StyledNav, { StyledNavLogo } from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";
import ComboItem from "@components/comboItem/ComboItem";
import { cities } from "../../data/cities";

const Nav: FC = (): JSX.Element => {
  const [selectedCity, setSelectedCity] = useState<string>("Select location");

  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faWind} />
        <span>Weather</span>
      </StyledNavLogo>
      <ComboBox text={selectedCity}>
        {cities.map((city, index) => (
          <ComboItem key={`city-${index}`} onClick={() => setSelectedCity(city)}>
            {city}
          </ComboItem>
        ))}
      </ComboBox>
    </StyledNav>
  );
};

export default Nav;
