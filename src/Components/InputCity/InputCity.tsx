import styled from "@emotion/styled";
import type InputCityComponent from "./InputCity.types";

const InputCity: InputCityComponent = styled.div`
  padding: 10px 15px;
  &:hover {
    background-color: ${({ theme: { card } }) => {
      return card;
    }};
  }
`;

export default InputCity;
