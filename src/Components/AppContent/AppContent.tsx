import { lazy, Suspense } from "react";
import type { FC, LazyExoticComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import { AnimatePresence } from "framer-motion";

const Main: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../../Pages/Main")> => {
    return new Promise((resolve) => {
      resolve(import("../../Pages/Main"));
    });
  }
);

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />

      <Suspense fallback={<Loader />}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
    </>
  );
};

export default AppContent;
