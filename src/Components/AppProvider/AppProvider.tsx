import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useSystemTheme from "react-use-system-theme";
import themes from "../../Themes/themes.json";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
