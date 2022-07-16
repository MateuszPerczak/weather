import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { RefAttributes } from "react";
import type { LinkProps } from "react-router-dom";

type RouterLinkComponent = StyledComponent<
  LinkProps &
    RefAttributes<HTMLAnchorElement> & {
      theme?: Theme;
    },
  {},
  Record<string, unknown>
>;

export default RouterLinkComponent;
