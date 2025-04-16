import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaList from "./components/PizzaList";
import Slider from "./components/Slider";

//импортируем страницы
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Router> 
      <Routes>
      {/*маршрут*/}
      <Route path="/" element={<MainLayout />}>
          <Route index element={<PizzaList />} />
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
