import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faFigma,
  faNodeJs,
  faHtml5,
  faCss,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "../assets/styles/components/Slides.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Skills = () => {
  const skills = [
    { id: 1, icon: faJs, text: "JavaScript" },
    { id: 2, icon: faReact, text: "React" },
    { id: 3, icon: faFigma, text: "Figma" },
    { id: 4, icon: faDatabase, text: "MySQL" },
    { id: 5, icon: faNodeJs, text: "Node.js" },
    { id: 6, icon: faHtml5, text: "HTML" },
    { id: 7, icon: faCss, text: "CSS" },
  ];

  return (
    <div className={styles.sliders}>
      <h1>Skills:</h1>
      <div className={styles.slides}>
        <Swiper
          spaceBetween={20}
          loop={true}
          className={styles.swipers}
          navigation
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {skills.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div className={styles.item}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  className={styles.icons}
                />
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
