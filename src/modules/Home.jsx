import styles from '../styles/Home.module.css';
import instagram from '../img/instagram.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import profile from '../img/undraw_developer_activity_re_39tg.svg';
import Skills from './Skills';

function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.introduction}>
        <p className={styles.text}>Hello, I am</p>
        <span>Kaio Mendes</span>
        <p>Web and Mobile Developer</p>
        <a  href="/email" className={styles.button}>Lets Talk</a>

        <div className={styles.social}>
          <p className={styles.net}>Check out my social networks!</p>
          <a href="https://www.linkedin.com/in/kaio-mendes-449685264/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/kaio-mendes" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/mendes_kaio__/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    
      <div className={styles.profile_img}>
        <img src={profile} alt="profile" />
      </div>
      
    </div>
    <Skills />
    </>
  );
}

export default Home;
