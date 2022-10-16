import styled from "@emotion/styled";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.7rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  font-weight: normal;
  cursor: pointer;
  background-color: ${({ theme: { background } }) => background};
  color: ${({ theme: { accent } }) => accent};
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export default StyledLink;
