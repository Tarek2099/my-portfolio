import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myskills from "./components/Myskills";
import "./index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Myskills />
      <Footer />
    </>
  );
};

export default App;
