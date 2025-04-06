import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import data from "../data/pizza.json";
import NotFoundPage from "./NotFoundPage";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id);
    if (isNaN(productId)) {
      setProduct(null);
      return;
    }

    const foundProduct = data.find((pizza) => pizza.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);


  if (!product) {
    return <NotFoundPage />;
  }


  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Цена: {product.price}₽</p>
      <p>Категория: {product.category}</p>
      <p>Доступные размеры: {product.sizes.join(", ")} см</p>
    </div>
  );
}


export default ProductPage;
