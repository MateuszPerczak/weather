import styled from "@emotion/styled";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 12px;
  font-size: 0.8rem;
  aspect-ratio: 1;
  border-radius: 8px;
  font-weight: normal;
  cursor: pointer;
  background-color: ${({ theme: { background } }) => background};
  color: ${({ theme: { accent } }) => accent};
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export default StyledLink;
