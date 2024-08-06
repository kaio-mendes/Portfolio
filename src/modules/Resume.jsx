import styles from '../styles/Home.module.css';
import Profile from '../img/me.jpg'
function Resume() {
    return (
      <>
      <div className={styles.resume}>
      <h1>Hello World!</h1>
      <p>My name is Kaio and I am a student of <span>Systems Analysis and Development</span>, with a focus on <span>web and mobile development</span>. I am passionate about creating innovative and functional technological solutions and am always looking for new challenges to expand my knowledge and skills. With a strong foundation in programming and a practical approach to problem-solving, I am ready to contribute to projects that seek excellence and impact.</p>
      </div>
      <div className={styles.profile}>
        <img src={Profile} alt="Profile" />
      </div>
      <div className={styles.hey}>
      <a href="https://drive.google.com/drive/folders/1aYO0pIE8hek_i5xYuHucdJkxoUCbMg-y" className={styles.button}>Certificates</a>
      </div>
   
      </>
    );
  }
  
  export default Resume;