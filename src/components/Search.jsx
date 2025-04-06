import React from "react";
import styles from "./styles_modules/Search.module.css";

function Search({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Поиск пиццы..."
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
}

export default Search;