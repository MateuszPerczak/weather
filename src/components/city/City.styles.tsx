import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledCity = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 1;
  font-size: clamp(1rem, 10vw, 5rem);
`;

export const StyledCityText = styled.span`
  font-size: clamp(0.8rem, 4vw, 2rem);
  font-weight: bold;
`;

export default StyledCity;
