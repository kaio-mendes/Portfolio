import React from "react";
import styles from "../assets/styles/modules/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import MyButton from "../components/Buttons";
const Navbar = () => {
  const redirect = () => {
    window.open(
      "https://wa.me/5514988104457?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
    );
  };
  return (
    <nav className={styles.navbar}>
      <h1>
        <a href="/">
          <span>Kaio</span> Mendes.
        </a>
      </h1>

      <ul className={styles.items}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <button className="MyButton" onClick={redirect}>
        Let's Talk
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </nav>
  );
};

export default Navbar;
