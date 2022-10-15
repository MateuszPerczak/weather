import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledComboBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: normal;
  position: relative;
  cursor: pointer;
  background-color: ${({ theme: { background } }) => background};
`;

export const StyledComboBoxList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.3rem);
  border-radius: 0.5rem;
  left: 0;
  width: 100%;
  padding: 0.3rem;
  overflow-y: auto;
  background-color: ${({ theme: { background } }) => background};
  border: 1px solid ${({ theme: { card } }) => card};
  color: ${({ theme: { color } }) => color};
  box-shadow: 0 0 1rem #00000022;
`;

export default StyledComboBox;
