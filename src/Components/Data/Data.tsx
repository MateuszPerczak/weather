import styled from "@emotion/styled";
import type DataComponent from "./Data.types";

const Data: DataComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  padding: 10px 15px;
  background-color: ${({ theme: { input } }) => input};
  border-radius: 10px;
`;

export default Data;
