import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  width: 400px;
  aspect-ratio: 3/2;
  background-color: ${({ theme: { card } }) => card};
  border-radius: 1rem;
`;

export default StyledCard;
