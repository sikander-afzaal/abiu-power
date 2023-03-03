import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
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
