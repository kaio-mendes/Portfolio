import React from "react";
import styles from "../assets/styles/modules/Home.module.css";
import Skills from "./Skills";
import Projetos from "./Projetos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <article className={styles.container}>
      <div className={styles.welcome}>
        <h1>
          Creating impactful digital <span>experiences</span>
        </h1>
        <p>
          I create and develop simple and functional solutions with focus and
          precision.
        </p>
        <div className={styles.email} id="about">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kaio.mendes1911@gmail.com&su=Olá&body=Olá+Kaio%2C+gostaria+de+falar+com+você!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>kaio.mendes1911@gmail.com</p>
          </a>
        </div>
      </div>
      <div className={styles.about}>
        <p>
          Hi, I'm <span>Kaio</span>. Nice to meet you.
        </p>
        <p>
          I’m a developer experienced in TypeScript, JavaScript, and React,
          focused on building high-performance web solutions. Passionate about
          turning ideas into innovative digital products, I’m always learning
          and growing. My goal is to contribute to impactful digital projects.
        </p>
      </div>
      <Skills />
      <Projetos />
      <div className={styles.cv}>
        <h1>CV:</h1>
        <div className={styles.curriculo}>
          <a
            href="/KaioMendes-cv.pdf"
            download="KaioMendes-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Home;
