import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Retro Round Frame",
      price: 65,
      image: "src/assets/retro.png",
    },
    {
      id: 2,
      name: "Sleek Titanium Frame",
      price: 50,
      image: "src/assets/sleek.png",
    },
    {
      id: 3,
      name: "Sophisticated Rimlesss",
      price: 90,
      image: "src/assets/rimless.png",
    },
    {
      id: 4,
      name: "Modern Metal Frame",
      price: 80,
      image: "src/assets/modern.png",
    },
    {
      id: 5,
      name: "Sophisticated Rimlesss",
      price: 90,
      image: "src/assets/rimless.png",
    },
    {
      id: 6,
      name: "Trendy Tortoise Shell",
      price: 85,
      image: "src/assets/trendy.png",
    },
    {
      id: 7,
      name: "Modern Metal Frame",
      price: 80,
      image: "src/assets/modern.png",
    },
    {
      id: 8,
      name: "Classic Black Frame",
      price: 50,
      image: "src/assets/classic.png",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap items-center justify-evenly mt-2">
        <div className="lg:px-10">
          <Link to="/">
            <p className="mb-20">←Back to Shop</p>
          </Link>
          <img src="src/assets/des.png" className="w-4/5 mx-auto"/>
        </div>
        <div className="flex flex-col ml-3 lg:ml-0 lg:mt-20 text-[#121A21]">
          <p>Brand:Elegant | Similar Product from Elegant</p>
          <h1 className="text-xl font-semibold">Modern Metal Frame</h1>
          <p className="mt-5 mb-2">
            Description: Experience ultimate comfort and durability
            <br /> with the Sleek Titanium Frame, known for its lightweight
            <br /> construction and premium feel.
          </p>
          <hr />

          <label htmlFor="frame" className="mt-5">
            Lens Width and Frame Size
          </label>
          <select
            id="frame"
            className="bg-white border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-[#2C3E50] focus:border-[#2C3E50] block lg:w-full p-2.5 lg:h-14 w-5/6"
          >
            <option selected>Select Frame Size</option>
            <option>28 mm</option>
            <option>30 mm</option>
            <option>32 mm</option>
          </select>

          <p className="my-5">Choose Color</p>
          <div className="grid grid-cols-4 gap-0.5">
            <button className="w-10 h-10 bg-black rounded-full focus:opacity-30 "></button>
            <button className="w-10 h-10 bg-gray-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-red-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-purple-600 rounded-full focus:opacity-30"></button>
          </div>
          <p className="text-xl font-bold mt-10">$80.00</p>
          <Link to="/cart">
            <button className="btn mt-10 border-2 border-[#2C3E50] text-[#2C3E50] rounded lg:w-56 h-10 w-80 mx-auto">
              Remove Item
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-lg font-bold ml-10 text-[#2C3E50]">Recommended</h1>
      </div>

      <div className="container pt-10 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {products.map((product) => (
            <Link to="/details">
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
