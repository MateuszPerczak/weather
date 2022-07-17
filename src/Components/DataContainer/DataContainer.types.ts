import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type DataContainerProps = {
  flexDirection: "row" | "column";
};

type DataContainerComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
    flexDirection: "row" | "column";
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export default DataContainerComponent;
