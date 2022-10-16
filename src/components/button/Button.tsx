import styled from "@emotion/styled";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.7rem;
  font-size: 0.8rem;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  font-weight: normal;
  cursor: pointer;
  background-color: ${({ theme: { background } }) => background};
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export default Button;
