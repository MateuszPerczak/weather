import styled from "@emotion/styled";
import type FooterComponent from "./Footer.types";

const StyledFooter: FooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;

  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px;
  opacity: 0.5;
`;

export default StyledFooter;
