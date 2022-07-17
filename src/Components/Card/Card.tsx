import styled from "@emotion/styled";
import type CardComponent from "./Card.types";

const Card: CardComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 0 25px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  background-color: ${({ theme: { card } }) => {
    return card;
  }};
`;

export default Card;
