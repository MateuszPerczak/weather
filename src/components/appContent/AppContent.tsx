import AnimatedBackground from "@components/animatedBackground/AnimatedBackground";
import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import WeatherProvider from "@components/weatherProvider/WeatherProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";
import { useState } from "react";

const AppContent: FC = (): JSX.Element => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <AnimatedBackground />
      <Nav selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <QueryClientProvider client={queryClient}>
        <WeatherProvider city={selectedCity} />
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default AppContent;
