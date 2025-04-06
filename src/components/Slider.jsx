import React, { useState, useEffect } from "react";
import styles from "./styles_modules/Slider.module.css"; 

function Slider() {
  const slides = [
    "https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-5396.jpg?t=st=1742754648~exp=1742758248~hmac=a1accbe43bf74cd3e77972cdf59f0be226a9fcc38a093fd4e9beece701766f58&w=1380",
    "https://img.freepik.com/free-photo/close-up-person-cooking_23-2150980258.jpg?t=st=1742754699~exp=1742758299~hmac=7cde611e2e6ffe3cb03c59d3b42d0dfac54c06a89eb7c0733a3adbf0f3578ebb&w=1380",
    "https://img.freepik.com/free-photo/close-up-delicious-pizza_23-2150702787.jpg?t=st=1742754719~exp=1742758319~hmac=25b357ad4941400057bab213e9e031d38c128795543429b910a1651928bd1b05&w=1380",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <button className={styles.sliderButton} onClick={prevSlide}>Назад</button>
      <img src={slides[currentSlide]} alt="Слайд" />
      <button className={styles.sliderButton} onClick={nextSlide}>Вперед</button>
    </div>
  );
}

export default Slider;