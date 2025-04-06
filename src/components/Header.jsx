import styles from '../components/styles_modules/Header.module.css';

import React from "react";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Пиццерия</h1>
      <nav>
        <a href="#">Меню</a> | <a href="#">О нас</a> | <a href="#">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;