import "./css/styles.css";
import { Router } from "@reach/router";
// import area51 from "./images/area51small.jpeg";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Books from "./components/Departments/Books";
import Departments from "./components/Departments";
import Quotes from "./components/Quotes";
import SciFi from "./components/Departments/SciFi";
import Vinyl from "./components/Departments/Vinyl";
import Jewellery from "./components/Departments/Jewellery";

function App() {
  return (
    <div className="App">
      {/* <img className="area51" src={area51} alt="area51" /> */}
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Books path="/departments/books" />
        <Departments path="/departments" />
        <SciFi path="/departments/scifi" />
        <Vinyl path="/departments/vinyl" />
        <Jewellery path="/departments/jewellery" />
      </Router>
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
