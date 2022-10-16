import type { FC } from "react";
import StyledLink from "./Link.styles";
import type { LinkProps } from "./Link.types";

const Link: FC<LinkProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <StyledLink rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </StyledLink>
  );
};

export default Link;
