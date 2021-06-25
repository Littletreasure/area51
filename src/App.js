import "./css/styles.css";
import { Router } from "@reach/router";
import area51 from "./images/area51small.jpeg";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Books from "./components/Books";
import Departments from "./components/Departments";


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
        <Departments path='/departments' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
