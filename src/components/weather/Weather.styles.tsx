import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledWeather = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 100%;
  gap: 16px;
`;

export const StyledWeatherCity = styled(motion.header)`
  font-size: clamp(0.8rem, 5vw, 2rem);
  font-weight: bold;
`;

export default StyledWeather;
