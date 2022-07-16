import styled from "@emotion/styled";
import type CardContentComponent from "./CardContent.types";

const StyledCardContent: CardContentComponent = styled.div<{
  alignItems: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }): string => alignItems};
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export default StyledCardContent;
