import styled from "@emotion/styled";

const StyledWeatherTemperature = styled.div`
  font-size: 6rem;
  border-radius: 8px;
  background-color: ${({ theme: { nav } }) => nav};
`;

export default StyledWeatherTemperature;
