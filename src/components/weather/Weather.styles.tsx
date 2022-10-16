import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledWeather = styled(motion.section)`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 16px;
`;

export const StyledWeatherCity = styled.header`
  font-size: clamp(0.8rem, 5vw, 3rem);
  font-weight: bold;
`;

export default StyledWeather;
