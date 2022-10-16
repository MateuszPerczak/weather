import styled from "@emotion/styled";

const ComboItem = styled.span`
  display: flex;
  flex: 1 1 auto;
  padding: 8px 16px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme: { hover } }) => hover};
  }
`;

export default ComboItem;
