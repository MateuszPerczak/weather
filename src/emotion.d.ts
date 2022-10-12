import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    nav: string;
    accent: string;
    card: string;
  }
}
