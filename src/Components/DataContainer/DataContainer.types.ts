import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

type DataContainerComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export default DataContainerComponent;
