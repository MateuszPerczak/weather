import type { FC } from "react";
import type ButtonProps from "./Button.types";
import StyledButton from "./Button.style";

const Button: FC<ButtonProps> = ({ children, ...rest }): JSX.Element => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
