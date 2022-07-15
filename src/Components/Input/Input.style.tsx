import styled from "@emotion/styled";
import type InputComponent from "./Input.types";
import { motion } from "framer-motion";

const StyledInput: InputComponent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-width: 150px;
  padding: 10px 15px;
  border-radius: 10px;
  user-select: none;
  background-color: ${({ theme: { input } }) => {
    return input;
  }};
`;

export const StyledInputList = styled(motion.div)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  border-radius: 10px;
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${({ theme: { input } }) => {
    return input;
  }};
  box-shadow: 0 0 20px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
`;

export default StyledInput;
