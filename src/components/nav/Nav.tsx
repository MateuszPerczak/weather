import type { FC } from "react";
import StyledNav, { StyledNavLogo } from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";
import ComboItem from "@components/comboItem/ComboItem";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faWind} />
        <span>Weather</span>
      </StyledNavLogo>
      <ComboBox text="Select location">
        <ComboItem>1</ComboItem>
        <ComboItem>2</ComboItem>
        <ComboItem>3</ComboItem>
        <ComboItem>4</ComboItem>
        <ComboItem>5</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
        <ComboItem>6</ComboItem>
      </ComboBox>
    </StyledNav>
  );
};

export default Nav;
