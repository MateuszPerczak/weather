import type { FC, PropsWithChildren } from "react";
import StyledCardContent from "./CardContent.style";

type CardContentProps = PropsWithChildren<{
  alignItems: string;
}>;

const CardContent: FC<CardContentProps> = ({ children, alignItems }) => {
  return (
    <StyledCardContent alignItems={alignItems}>{children}</StyledCardContent>
  );
};
export default CardContent;
