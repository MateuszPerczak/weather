import styled from "@emotion/styled";
import type { LinkComponent } from "./Link.types";

const StyledLink: LinkComponent = styled.a`
  color: ${({ theme: { color } }) => color};
`;

export default StyledLink;
