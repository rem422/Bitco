import './App.css'
import ScrollBtn from "./Components/ScrollBtn/ScrollBtn";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Brands from "./Components/Brands/Brands";
import About from "./Components/About/About";
import Resources from "./Components/Resources/Resources";
import Price from "./Components/Price/Price";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <ScrollBtn />
      <Navbar />
      <Header />
      <Brands  />
      <About />
      <Resources />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
