import { useContext } from "react";
import "./App.css";
import Footer from "./modules/Footer";
import Home from "./modules/Home";
import Navbar from "./modules/Navbar";
import { ThemeContext } from "./components/themeContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
