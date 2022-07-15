import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import themes from "../../Themes/themes.json";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
