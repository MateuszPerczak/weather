import styled from "@emotion/styled";
import type CardContentComponent from "./CardContent.types";

const CardContent: CardContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
`;

export default CardContent;
