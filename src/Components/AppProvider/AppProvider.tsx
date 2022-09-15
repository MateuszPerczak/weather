import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import useSystemTheme from "react-use-system-theme";
import themes from "../../Themes/themes.json";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const systemTheme: keyof typeof themes = useSystemTheme("dark");

  return (
    <ThemeProvider theme={themes[systemTheme]}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/weather">{children}</BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
