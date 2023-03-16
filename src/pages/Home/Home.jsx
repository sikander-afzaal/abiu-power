import Choose from "./Choose";
import Hero from "./Hero";
import Product from "./Product";
import ApiDemo from "./ApiDemo";
import Solutions from "./Solutions";
import Statistics from "./Statistics";
import Contact from "../../components/Contact";
import Started from "../../components/Started";

const Home = () => {
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
