import type { FC } from "react";
import type LinkProps from ".//Link.types";
import StyledLink from "./Link.style";

const Link: FC<LinkProps> = ({ children, ...rest }: LinkProps): JSX.Element => {
  return (
    <StyledLink {...rest} rel="noopener noreferrer" target="_blank">
      {children}
    </StyledLink>
  );
};

export default Link;
