import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ScrollToTop from "./components/scrollToTop";
import ReactGA from "react-ga";

const TRACKING_ID = 'G-SF15SVNZDQ';
ReactGA.initialize(TRACKING_ID);


const App = () => {

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
