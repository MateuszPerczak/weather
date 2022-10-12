import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  flex: 1 1 50px;
  font-weight: bold;
  background-color: ${({ theme: { nav } }) => nav};
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledNav;
