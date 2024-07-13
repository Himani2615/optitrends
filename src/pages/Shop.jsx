import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductGrid";

export const Shop = () => {

  return (
    <>
      <Navbar />
      <div className="container pt-5 p-3">
        <ProductsGrid/>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
