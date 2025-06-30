import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bookshelf_img from "../image/searchBooks.png";
import github_finder from "../image/github_finder.png";
import userSearch from "../image/userSearch.png";
import MeusLivros from "../image/MeusLivros.png";

import Home from "../image/workout/home.jpeg";
import Metas from "../image/workout/metas.jpeg";
import novoTreino from "../image/workout/novoTreino.jpeg";
import Treinos from "../image/workout/treinos.jpeg";
import styles from "../assets/styles/modules/Projetos.module.css";
import LoadProjects from "../components/LoadProjects";

const Projetos = () => {
  const projects = [
    {
      id: 1,
      img: [bookshelf_img, MeusLivros],
      text: "Project with Google Books",
      href: "https://projectgooglebooksapi.netlify.app/",
      descricao:
        "A web application that integrates with the Google Books API to search for books, display detailed information, and create personalized lists. It allows users to explore a wide variety of books by title, author, or genre, and access additional information such as publication year, ratings, and summaries. A perfect tool for book lovers and researchers to find their next read or dive deeper into the world of literature.",
      tecnologias: ["Javascript", "React", "Api-GoogleBooks"],
    },

    {
      id: 2,
      img: [github_finder, userSearch],
      text: "Github finder",
      href: "https://github-finderproject.netlify.app/",
      descricao:
        "A web application that allows users to search for and view GitHub user profiles.By entering a username, the tool displays information such as public repositories, followers, activity, and profile statistics. Ideal for developers who want to explore projects and profiles of other programmers or learn more about the work of collaborators in open source projects.",
      tecnologias: ["Javascript", "React", "Api-Github"],
    },

    {
      id: 3,
      img: [Home, Metas, novoTreino, Treinos],
      text: "Workout",
      descricao:
        "A mobile workout app built with React Native and TypeScript that helps users create, track, and customize their training routines. The app offers a clean and intuitive interface for logging exercises, setting goals, and monitoring progress. It supports various workout types, including strength training, cardio, and flexibility exercises. With offline capabilities and personalized workout plans, it’s ideal for fitness enthusiasts looking to stay motivated and organized on the go",
      tecnologias: ["Typescript", "ReactNative"],
    },
  ];

  const [project, setProject] = useState(null);
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"; // bloqueia rolagem
    } else {
      document.body.style.overflow = "auto"; // libera rolagem
    }

    return () => {
      document.body.style.overflow = "auto"; // garante limpeza
    };
  }, [project]);
  function openProject(item) {
    setProject(item);
  }

  return (
    <div className={styles.projetos}>
      <h1 id="projects">My Projects:</h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        className={styles.sliders}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {projects.map((item) => (
          <SwiperSlide
            key={item.id}
            className={styles.swiperSlide}
            onClick={() => openProject(item)}
          >
            <div className={styles.item}>
              <img src={item.img[0]} alt={item.text} />
              <div className={styles.show}>
                <a>
                  <p>{item.text}</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {project && (
        <LoadProjects openProject={() => setProject(null)} project={project} />
      )}
    </div>
  );
};

export default Projetos;
