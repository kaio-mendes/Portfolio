import style from "../assets/styles/components/LoadProjects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LoadProjects = ({ openProject, project }) => {
  return (
    <div className={style.content}>
      <div className={style.projects}>
        <div className={style.voltar}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={style.button}
            onClick={openProject}
          />
        </div>
        <div className={style.container}>
          <div className={style.img}>
            <img src={project.img} alt={project.text} />
          </div>
          <div className={style.informacoes}>
            <h1>{project.text}</h1>
            <h2>Descrição:</h2>
            <p>{project.descricao}</p>
            <div className={style.tecnologias}>
              {project.tecnologias.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className={style.link}>
              <a href={project.href}>Visite o site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadProjects;
