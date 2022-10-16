import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import WeatherProvider from "@components/weatherProvider/WeatherProvider";
import type { FC } from "react";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <WeatherProvider>
        <span>Test</span>
      </WeatherProvider>
      <Footer />
    </>
  );
};

export default AppContent;
