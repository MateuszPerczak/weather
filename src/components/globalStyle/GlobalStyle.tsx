import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";
import useWindowDimensions from "@hooks/useWindowDimensions";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color, accent }: Theme = useTheme();
  const { height } = useWindowDimensions();
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
          display: flex;
          flex-direction: column;
          font-family: Poppins;
          background: ${background};
          color: ${color};
          user-select: none;
          height: ${`${height}px`};
        }
        #root {
          display: flex;
          flex: 1;
          flex-direction: column;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 2px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${accent};
          border-radius: 10px;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
