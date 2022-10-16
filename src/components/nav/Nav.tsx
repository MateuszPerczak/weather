import type { FC } from "react";
import StyledNav, { StyledNavChildren, StyledNavLogo } from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";
import { cities } from "../../data/cities";
import Button from "@components/button/Button";
import ComboItem from "@components/comboItem/ComboItem";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { NavProps } from "./Nav.types";
import Link from "@components/link/Link";

const Nav: FC<NavProps> = ({ selectedCity, setSelectedCity }): JSX.Element => {
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
        <Link href="https://github.com/MateuszPerczak">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </StyledNavChildren>
    </StyledNav>
  );
};

export default Nav;
