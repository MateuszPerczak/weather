import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    card: string;
    shadow: string;
    input: string;
    scrollbar: string;
    button: string;
  }
}
