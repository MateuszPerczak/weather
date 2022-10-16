import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledComboBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 120px;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: normal;
  position: relative;
  cursor: pointer;
  background-color: ${({ theme: { combo } }) => combo};
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export const StyledComboBoxList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  border-radius: 8px;
  width: 100%;
  padding: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  background-color: ${({ theme: { combo } }) => combo};
  border: 1px solid ${({ theme: { border } }) => border};
  color: ${({ theme: { color } }) => color};
  box-shadow: 0 0 1rem ${({ theme: { shadow } }) => shadow};
`;

export const StyledComboBoxItem = styled.span`
  display: flex;
  flex: 1 1 auto;
  padding: 8px 16px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme: { hover } }) => hover};
  }
`;

export default StyledComboBox;
