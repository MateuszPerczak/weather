import type { FC } from "react";
import StyledCard from "./Card.styles";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card: FC = (): JSX.Element => {
  return <StyledCard><FontAwesomeIcon icon={faPlus} /></StyledCard>;
};

export default Card;
