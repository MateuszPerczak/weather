import styled from "@emotion/styled";
import type FooterComponent from "./Footer.types";

const StyledFooter: FooterComponent = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  opacity: 0.5;
`;

export default StyledFooter;
