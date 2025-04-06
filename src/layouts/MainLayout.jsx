import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
      <>
        <Header />
        <Slider />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
  
  export default MainLayout;
