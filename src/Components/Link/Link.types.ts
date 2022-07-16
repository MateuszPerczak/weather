import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  PropsWithChildren,
} from "react";

type LinkProps = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;

export type LinkComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Record<string, unknown>
>;

export default LinkProps;
