import Card from "@components/card/Card";
import CardWrapper from "@components/cardWrapper/CardWrapper";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import type { FC } from "react";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <CardWrapper>
        <Card />
      </CardWrapper>
    </>
  );
};

export default AppContent;
