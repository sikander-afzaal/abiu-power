import Choose from "./Choose";
import Hero from "./Hero";
import Product from "./Product";
import Solutions from "./Solutions";
import Statistics from "./Statistics";
import Contact from "../../components/Contact";
import Started from "../../components/Started";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Solutions />
      <Choose />
      <Statistics />
      <Contact />
      <Started />
    </>
  );
};

export default Home;
