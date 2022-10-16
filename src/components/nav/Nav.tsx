import type { FC } from "react";
import StyledNav, {
  StyledNavChildren,
  StyledNavLogo,
  StyledNavWrapper,
} from "./Nav.styles";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "@components/comboBox/ComboBox";
import { cities } from "@data/cities";
import Button from "@components/button/Button";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { NavProps } from "./Nav.types";
import Link from "@components/link/Link";

const Nav: FC<NavProps> = ({ selectedCity, setSelectedCity }): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledNavLogo>
          <FontAwesomeIcon icon={faWind} />
          <span>Weather</span>
        </StyledNavLogo>
        <StyledNavChildren>
          <ComboBox value={selectedCity} setValue={setSelectedCity} options={cities} />
          <Button>
            <FontAwesomeIcon icon={faSyncAlt} />
          </Button>
          <Link href="https://github.com/MateuszPerczak">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </StyledNavChildren>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Nav;
