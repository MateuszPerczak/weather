import type { FC } from "react";
import StyledNav, { StyledNavLogo } from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faWind} />
        <span>Weather</span>
      </StyledNavLogo>
      <ComboBox>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </ComboBox>
    </StyledNav>
  );
};

export default Nav;
