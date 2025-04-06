import React, { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import PizzaCard from "../components/PizzaCard";
import Search from "./Search.jsx";
import styles from './styles_modules/PizzaList.module.css';


function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  
  useEffect(() => {
    setPizzas(pizzaData);
    setFilteredPizzas(pizzaData);
  }, []);

  const handleSearch = (query) => {
    const filtered = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPizzas(filtered);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className={styles.pizzaList}>
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
      </div>
    </>
  );
}

export default PizzaList;