import styles from '../styles/Skills.module.css';
import js from '../img/js.png';
import ts from '../img/ts.png';
import kotlin from '../img/kotlin.png';
import react from '../img/react.webp';
import java from '../img/java-logo-1.png';
import sql from '../img/Mysql_logo.png';

function Skills() {
  return (
    <div className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.abilities}>
            <img src={js} alt="js" />
            <img src={ts} alt="ts" />
            <img src={kotlin} alt="kotlin" />
            <img src={react} alt="react" />
            <img src={java} alt="java" />
            <img src={sql} alt="sql" />
        </div>
    </div>
  );
}

export default Skills;