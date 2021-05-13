import './css/styles.css';
import { Router } from "@reach/router";
import area51 from './images/area51small.jpeg'
import Header from './components/Header'
import About from './components/About'
import Home from "./components/Home";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <img className="area51" src={area51} alt="area51" />
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
