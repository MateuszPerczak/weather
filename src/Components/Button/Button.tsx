import type { FC, PropsWithChildren } from "react";
import StyledButton from "./Button.style";

const Button: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
