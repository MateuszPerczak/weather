import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import StyledFooter from "./Footer.styles";

const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faCopyright} />
      <span>2022 By Mateusz Perczak</span>
    </StyledFooter>
  );
};

export default Footer;
