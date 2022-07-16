import styled from "@emotion/styled";
import type CardComponent from "./Card.types";

const Card: CardComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: min(90vw, 600px);
  aspect-ratio: 2/1;
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
