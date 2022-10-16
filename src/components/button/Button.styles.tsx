import styled from "@emotion/styled";

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.7rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme: { background } }) => background};
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export default StyledButton;
