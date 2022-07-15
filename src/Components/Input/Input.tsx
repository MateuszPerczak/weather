import type { FC } from "react";
import { useState } from "react";
import StyledInput, { StyledInputList } from "./Input.style";
import Icon from "../Icon/Icon";
import type { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({ header, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledInput onClick={() => setIsOpen(!isOpen)}>
      <span>{header}</span>
      <Icon>{isOpen ? "\uE010" : "\uE011"}</Icon>
      <StyledInputList
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 250 : 0 }}
        transition={{ type: "spring", mass: 0.5, stiffness: 150, damping: 10 }}
        onMouseLeave={() => setIsOpen(false)}
      >
        {isOpen && children}
      </StyledInputList>
    </StyledInput>
  );
};

export default Input;
