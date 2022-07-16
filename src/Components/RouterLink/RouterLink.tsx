import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type RouterLinkComponent from "./RouterLink.types";

const RouterLink: RouterLinkComponent = styled(Link)`
  color: ${({ theme: { color } }) => color};
`;

export default RouterLink;
