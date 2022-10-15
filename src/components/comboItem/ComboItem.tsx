import styled from "@emotion/styled";

const ComboItem = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${({ theme: { combo } }) => combo};
  }
`;

export default ComboItem;
