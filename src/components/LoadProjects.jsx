import style from "../assets/styles/components/LoadProjects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const LoadProjects = ({ openProject, project }) => {
  console.log("Imagens do projeto:", project.img);
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      openProject();
    }
  };
  return (
    <div className={style.content} onClick={handleOutsideClick}>
      <div className={style.projects} ref={modalRef}>
        <div className={style.container}>
          <div className={style.img}>
            <Swiper
              key={project.id}
              loop={true}
              navigation
              modules={[Navigation]}
            >
              {project.img.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${project.text} ${index + 1}`}
                    className={style.projectImg}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.informacoes}>
            <h1>{project.text}</h1>
            <h2>Description:</h2>
            <p>{project.descricao}</p>
            <div className={style.tecnologias}>
              {project.tecnologias.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className={style.link}>
              {project.href ? <a href={project.href}>Visit site</a> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadProjects;
