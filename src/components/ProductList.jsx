import React from "react";
import CounterForm from "./CounterForm";
import { Link } from "react-router-dom";

export const ProductList = ({ product }) => {
  return (
    <div>
      <div className="flex mt-16 px-1 ml-2 lg:ml-0">
        <div className="flex flex-col lg:ml-40 lg:w-auto">
          <img src={product.image} className=" mx-auto lg:mt-0  " />
          <Link to="/">
            <button className="btn border-2 border-[#2C3E50] text-[#2C3E50] w-full lg:w-56 rounded p-1 lg:p-3">
              Remove Item
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap ">
        <div className="flex flex-col text-md w-full lg:w-auto lg:ml-56 ml-5 md:ml-28">
          <p className="sm:block hidden text-[#121A21]">
            Brand: Elegant | Similar product from Elegant
          </p>
          <h1 className="text-md lg:text-lg font-semibold mt-1 text-[#121A21]">{product.name}</h1>
          <div className="flex flex-wrap">
            <p className="lg:mt-10 lg:mb-4 mb-1 mt-3 text-sm">Size</p>
            <p className="lg:ml-20 lg:mt-10 mt-3 lg:mb-1 mb-0.5 ml-2 text-sm">
              Color
            </p>
          </div>
          <div className="flex flex-wrap lg:w-auto">
            <p className="text-sm">28mm</p>
            <div className="w-6 h-6 bg-black rounded-full  mb-2 lg:ml-16 ml-1"></div>
          </div>
        </div>
        <div className="flex flex-col font-bold text-xl items-center md:w-auto lg:ml-56 ml-16 md:ml-24">
          <p className="ml-5 md:ml-0">${product.price}.00</p>

          <CounterForm />
        </div>
        </div>
      </div>

      <div className="my-10" />
    </div>
  );
};

export default ProductList;