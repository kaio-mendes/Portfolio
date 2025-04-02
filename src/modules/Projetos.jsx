import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bookshelf_img from "../image/bookshelf.jpg";
import github_finder from "../image/github_finder.jpg";

import styles from "../assets/styles/modules/Projetos.module.css";

const Projetos = () => {
  const projects = [
    {
      id: 1,
      img: bookshelf_img,
      text: "Project with Google Books",
      href: "https://projectgooglebooksapi.netlify.app/",
    },
    {
      id: 2,
      img: github_finder,
      text: "Github finder",
      href: "https://github-finderproject.netlify.app/",
    },
  ];

  return (
    <div className={styles.projetos}>
      <h1 id="projects">My Projects:</h1>
      <Swiper
        spaceBetween={30} // Aumente o spaceBetween para maior espaçamento entre os slides
        loop={true}
        className={styles.sliders}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10, // Menos espaço para telas pequenas
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20, // Espaço maior para telas médias
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30, // Espaço ainda maior para telas grandes
          },
        }}
      >
        {projects.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <div className={styles.item}>
              <img src={item.img} alt={item.text} />
              <div className={styles.show}>
                <a href={item.href}>
                  <p>{item.text}</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projetos;
