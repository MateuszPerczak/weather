import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export type InputProps = PropsWithChildren<{
  header: string;
}>;

type InputComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export default InputComponent;
