import styled from "@emotion/styled";

const ComboItem = styled.span`
  display: flex;
  flex: 1 1 auto;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${({ theme: { combo } }) => combo};
  }
`;

export default ComboItem;
