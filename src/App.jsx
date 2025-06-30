import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./modules/Footer";
import Home from "./modules/Home";
import Navbar from "./modules/Navbar";
import { ThemeContext } from "./components/themeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
