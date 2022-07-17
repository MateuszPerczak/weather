import styled from "@emotion/styled";
import type DataContainerComponent from "./DataContainer.types";
import type { DataContainerProps } from "./DataContainer.types";

const DataContainer: DataContainerComponent = styled.div<DataContainerProps>`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: flex-start;
  flex-direction: ${({ flexDirection }) => flexDirection};
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default DataContainer;
