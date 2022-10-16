import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import WeatherProvider from "@components/weatherProvider/WeatherProvider";
import type { FC } from "react";
import { useState } from "react";

const AppContent: FC = (): JSX.Element => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <>
      <GlobalStyle />
      <Nav selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <WeatherProvider city={selectedCity} />
      <Footer />
    </>
  );
};

export default AppContent;
