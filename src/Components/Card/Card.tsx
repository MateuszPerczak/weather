import styled from "@emotion/styled";
import type CardComponent from "./Card.types";

const Card: CardComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 500px;
  aspect-ratio: 2/1;
  padding: 20px;
  border-radius: 10px;
  user-select: none;
  box-shadow: 0 0 25px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  background-color: ${({ theme: { card } }) => {
    return card;
  }};
`;

export default Card;
