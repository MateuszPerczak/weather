import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  transition: background-color 200ms;
  background-color: ${({ theme: { input } }) => {
    return input;
  }};
  &:active {
    background-color: ${({ theme: { button } }) => {
      return button;
    }};
  }
`;

export default StyledButton;
