import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type FooterComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Record<string, unknown>
>;

export default FooterComponent;
