import styled from "@emotion/styled";

const WeatherTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: clamp(3rem, 5vw, 6rem);
  border-radius: 8px;
  background-color: ${({ theme: { nav } }) => nav};
`;

export default WeatherTemperature;
