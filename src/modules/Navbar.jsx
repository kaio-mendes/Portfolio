import styles from '../styles/Navbar.module.css';
function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.list}>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;