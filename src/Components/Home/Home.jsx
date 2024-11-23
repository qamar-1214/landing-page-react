import About from "./About";
import Branding from "./Branding";
import Hero from "./Hero";
import Hoodies from "./Hoodies";

import Shorts from "./Shorts";

const Home = () => {
  return (
    <div id="home" className="w-full bg-secondary h-full">
      <Hero />
      <About />
      <Hoodies />

      <Shorts />
      <Branding />
    </div>
  );
};

export default Home;
