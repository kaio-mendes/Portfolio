import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bookshelf_img from "../image/bookshelf.jpg";
import github_finder from "../image/github_finder.jpg";

import styles from "../assets/styles/modules/Projetos.module.css";
import LoadProjects from "../components/LoadProjects";

const Projetos = () => {
  const projects = [
    {
      id: 1,
      img: bookshelf_img,
      text: "Project with Google Books",
      href: "https://projectgooglebooksapi.netlify.app/",
      descricao:
        "Uma aplicação web que se integra com a API do Google Books para pesquisar livros, exibir informações detalhadas e criar listas personalizadas. Permite que os usuários explorem uma grande variedade de livros por título, autor ou gênero, e acessem informações adicionais como ano de publicação, avaliações e resumos. Uma ferramenta perfeita para amantes de livros e pesquisadores encontrarem sua próxima leitura ou se aprofundarem no mundo da literatura.",
      tecnologias: ["Javascript", "React", "Api-GoogleBooks"],
    },

    {
      id: 2,
      img: github_finder,
      text: "Github finder",
      href: "https://github-finderproject.netlify.app/",
      descricao:
        "Uma aplicação web que permite buscar e visualizar perfis de usuários no GitHub. Ao inserir o nome de um usuário, a ferramenta exibe informações como repositórios públicos, seguidores, atividades e estatísticas do perfil. Ideal para desenvolvedores que querem explorar projetos e perfis de outros programadores ou até para conhecer mais sobre o trabalho de colaboradores em projetos open source.",
      tecnologias: ["Javascript", "React", "Api-Github"],
    },
  ];

  const [project, setProject] = useState(null);

  function openProject(item) {
    setProject(item);
  }

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
                <a onClick={() => openProject(item)}>
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
