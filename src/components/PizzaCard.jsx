import React, { useState } from "react";

import styles from './styles_modules/PizzaCard.module.css';

function PizzaCard({ pizza }) {
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.card}>
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price} лей.</p>
      <div>
        {pizza.sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ""}`}
          >
            {size} см.
          </button>
        ))}
      </div>
      <button className={styles.addToCartButton}>Добавить в корзину</button>
    </div>
  );
}

export default PizzaCard;