import styles from "../assets/styles/modules/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";

const Navbar = () => {
  const { darkMode, toogleTheme } = useContext(ThemeContext);

  const redirect = () => {
    window.open(
      "https://wa.me/5514988104457?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
    );
  };
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <h1>
          <span>Kaio</span> Mendes.
        </h1>
      </a>

      <ul className={styles.items}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div className={styles.buttonsHome}>
        <button className="MyButton" onClick={redirect}>
          Let's Talk
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {darkMode ? (
          <GoSun className={styles.ThemeMode} onClick={toogleTheme} />
        ) : (
          <GoMoon className={styles.ThemeMode} onClick={toogleTheme} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
