import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    nav: string;
    accent: string;
    border: string;
    combo: string;
    shadow: string;
    hover: string;
    active: string;
  }
}
