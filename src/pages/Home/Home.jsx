import Choose from "./Choose";
import Hero from "./Hero";
import Product from "./Product";
import ApiDemo from "./ApiDemo";
import Solutions from "./Solutions";
import Statistics from "./Statistics";
import Contact from "../../components/Contact";
import Started from "../../components/Started";
import { useEffect } from "react";
import ReactGA from "react-ga";

const Home = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Hero />
      <Solutions />
      <ApiDemo />
      <Product />
      {/* <Choose /> */}
      {/* <Statistics /> */}
      <Contact />
      <Started />
    </>
  );
};

export default Home;
