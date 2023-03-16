import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      "";
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
