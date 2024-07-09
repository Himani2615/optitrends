import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

export const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Modern Metal Frame",
      price: 80,
      image: "src/assets/modern.png",
    },
    {
      id: 2,
      name: "Retro Round Frame",
      price: 65,
      image: "src/assets/retro.png",
    },
    {
      id: 3,
      name: "Sophisticated Rimless",
      price: 90,
      image: "src/assets/rimless.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-between mx-auto w-5/6">
        <Link to="/">
          <p className="">← Back</p>
        </Link>
        <h1 className="text-xl font-bold">Cart</h1>

        <Link to="/">
          <button className="btn border-2 border-[#2C3E50] text-[#2C3E50] rounded-lg lg:w-36 h-10 w-20">
            Clear All
          </button>
        </Link>
      </div>

      {products.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
      <hr className="w-5/6 mx-auto h-5" />
      <p className="text-center mt-14 text-[#2C3E50] text-lg font-semibold">
        Cart Summary
      </p>
      <div className="flex flex-wrap mt-10 mx-auto w-5/6 justify-between">
        <p className=" text-[#2C3E50]">Subtotal</p>
        <p className=" text-[#2C3E50]">$266.00</p>
      </div>
      <Link to="/review">
        <div className="w-5/6 mx-auto">
          <button className=" bg-[#2C3E50] rounded text-white h-8 mt-10 w-full text-lg">
            Next
          </button>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default Cart;
