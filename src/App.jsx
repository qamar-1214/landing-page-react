import Footer from "./Components/Home/Footer";
import Home from "./Components/Home/Home";

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
