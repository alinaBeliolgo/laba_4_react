import styles from '../components/styles_modules/Footer.module.css';
import React from "react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025</p>
      <a href="https://github.com/alinaBeliolgo/laba_3_react.git">Репозиторий</a>
    </footer>
  );
}

export default Footer;
