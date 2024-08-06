import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.copy_right}>
          <span>Kaio Mendes</span> &copy; 2024
        </p>
      </footer>
    </div>
  );
}

export default Footer;
