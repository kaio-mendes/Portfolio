import React from "react";
import styles from "../assets/styles/modules/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.items}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kaio-mendes-449685264/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mendes_kaio__/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5514988104457?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="https://github.com/kaio-mendes">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <p>
        <span>Kaio Vitor Couto Mendes</span> © 2025
      </p>
    </footer>
  );
};

export default Footer;
