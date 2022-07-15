import { css, Global, useTheme } from "@emotion/react";
import { memo } from "react";
import type { Theme } from "@emotion/react";
import type { FC } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Poppins", sans-serif;
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          height: 100vh;
          display: grid;
          place-items: center;
          box-shadow: inset 0 0 30px 0 ${theme.shadow};
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: ${theme.scrollbar};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
